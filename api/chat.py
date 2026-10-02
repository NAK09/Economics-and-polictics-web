import json
import os
from http.server import BaseHTTPRequestHandler

from google import genai
from google.genai import types


SYSTEM_INSTRUCTION = """
Bạn là Trợ lý AI Chuyên gia về Kinh tế Chính trị Mác - Lênin dành cho sinh viên Đại học.
Hãy thân thiện, dễ hiểu, dùng tiếng Việt khi người dùng viết tiếng Việt và giữ đúng thuật ngữ chuyên ngành.
Giải thích kiến thức bằng ví dụ gần gũi với sinh viên. Trả lời đúng ngôn ngữ người dùng.
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

            api_key = os.environ.get("GEMINI_API_KEY")
            if not api_key:
                return self._json(503, {"error": "Máy chủ chưa được cấu hình GEMINI_API_KEY."})

            client = genai.Client(api_key=api_key)
            result = client.models.generate_content(
                model=os.environ.get("GEMINI_MODEL", "gemini-flash-latest"),
                contents=message.strip(),
                config=types.GenerateContentConfig(system_instruction=SYSTEM_INSTRUCTION),
            )
            reply = result.text
            if not reply:
                return self._json(502, {"error": "AI không trả về nội dung. Vui lòng thử lại."})
            return self._json(200, {"reply": reply})
        except Exception:
            print("Gemini API request failed", flush=True)
            return self._json(502, {"error": "Dịch vụ AI đang gặp sự cố. Vui lòng thử lại sau."})

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
