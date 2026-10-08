import json
import logging
import os
from http.server import BaseHTTPRequestHandler

from google import genai
from google.genai import types


SYSTEM_INSTRUCTION = """
Bạn là trợ lý học tập về Kinh tế Chính trị Mác - Lênin dành cho sinh viên.
Trả lời bằng đúng ngôn ngữ người dùng và giữ chính xác thuật ngữ chuyên ngành.
Phong cách như tin nhắn hỗ trợ: vào thẳng câu trả lời, thân thiện, rõ ràng, không chào hỏi lại ở mỗi lượt.
Mặc định trả lời trong 2–5 câu ngắn; chỉ giải thích dài hơn khi người dùng yêu cầu hoặc câu hỏi cần thiết.
Chỉ dùng danh sách khi có nhiều ý cần phân biệt. Tránh mở bài dài, lặp ý, emoji, tiêu đề rườm rà và lời kết xã giao.
Viết công thức bằng ký hiệu văn bản thông thường như c + v + m; không dùng dấu $ hoặc dấu sao để đánh dấu định dạng.
Nếu chưa đủ dữ kiện, nói rõ điều chưa chắc và hỏi một câu ngắn để làm rõ.
"""


class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        return self._json(200, {
            "ok": True,
            "geminiConfigured": bool(os.environ.get("GEMINI_API_KEY")),
        })

    def do_POST(self):
        try:
            content_length = int(self.headers.get("Content-Length", "0"))
            if content_length <= 0 or content_length > 16_384:
                return self._json(400, {"error": "Câu hỏi không hợp lệ hoặc quá dài."})

            try:
                data = json.loads(self.rfile.read(content_length))
            except (json.JSONDecodeError, UnicodeDecodeError):
                return self._json(400, {"error": "Dữ liệu gửi lên không hợp lệ."})

            message = data.get("message", "") if isinstance(data, dict) else ""
            if not isinstance(message, str) or not message.strip():
                return self._json(400, {"error": "Vui lòng nhập câu hỏi."})

            api_key = os.environ.get("GEMINI_API_KEY", "").strip()
            if not api_key:
                return self._json(503, {"error": "Máy chủ chưa được cấu hình GEMINI_API_KEY."})

            model_name = os.environ.get("GEMINI_MODEL", "gemini-3.5-flash-lite").strip()
            fallback_model = os.environ.get("GEMINI_FALLBACK_MODEL", "gemini-3.1-flash-lite").strip()
            client = genai.Client(api_key=api_key)
            config = types.GenerateContentConfig(system_instruction=SYSTEM_INSTRUCTION)
            try:
                result = client.models.generate_content(
                    model=model_name,
                    contents=message.strip(),
                    config=config,
                )
            except Exception as primary_error:
                status = getattr(primary_error, "code", None)
                if callable(status):
                    status = status()
                if status != 503 or not fallback_model or fallback_model == model_name:
                    raise

                logging.warning(
                    "Gemini model %s returned 503; trying fallback model %s",
                    model_name,
                    fallback_model,
                )
                result = client.models.generate_content(
                    model=fallback_model,
                    contents=message.strip(),
                    config=config,
                )
            reply = result.text
            if not reply:
                return self._json(502, {"error": "AI không trả về nội dung. Vui lòng thử lại."})
            return self._json(200, {"reply": reply})
        except Exception as exc:
            status = getattr(exc, "code", None)
            if callable(status):
                status = status()
            try:
                status = int(status)
            except (TypeError, ValueError):
                status = None

            logging.exception(
                "Gemini API request failed (exception=%s, provider_status=%s)",
                type(exc).__name__, status,
            )

            messages = {
                400: "Gemini từ chối yêu cầu. Hãy kiểm tra model GEMINI_MODEL và cấu hình API.",
                401: "Google từ chối API key. Hãy tạo key Gemini API mới và cập nhật GEMINI_API_KEY.",
                403: "API key không có quyền gọi Gemini API. Kiểm tra quyền, giới hạn key và cấu hình dự án Google.",
                404: "Không tìm thấy model Gemini. Hãy kiểm tra giá trị GEMINI_MODEL.",
                429: "Gemini API đã hết quota hoặc vượt giới hạn tốc độ. Kiểm tra quota rồi thử lại.",
            }
            message = messages.get(
                status,
                "Gemini API tạm thời lỗi. Hãy thử lại; nếu vẫn lỗi, xem Function Logs trên Vercel.",
            )
            return self._json(502, {"error": message, "providerStatus": status})

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Allow", "POST, OPTIONS")
        self.end_headers()

    def _json(self, status, payload):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)
