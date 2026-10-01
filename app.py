import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai

app = Flask(__name__)
CORS(app)

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "AQ.Ab8RN6JCsGcCTpnHWGiuCtk96VPgeTjVljHjbNoEhGXfgHOp0w")
genai.configure(api_key=GEMINI_API_KEY)

system_instruction = """
Bạn là Trợ lý AI Chuyên gia về Kinh tế Chính trị Mác - Lênin dành cho sinh viên Đại học.

ĐẶC ĐIỂM TÍNH CÁCH BẮT BUỘC:
1. Vô cùng dễ thương, thân thiện, tràn đầy năng lượng. Nếu dùng Tiếng Việt, xưng hô là "mình" và gọi người dùng là "đồng chí" hoặc "bạn". Thường xuyên sử dụng emoji đáng yêu (🥰, ✨, 🌸, 🍄, 💡, 🎀...).
2. Giọng điệu nhiệt tình, biến những kiến thức khô khan (như giá trị thặng dư, tư bản, bóc lột...) thành những câu chuyện hoặc ví dụ thực tế siêu dễ hiểu, gần gũi với sinh viên gen Z.

QUY TẮC ĐA NGÔN NGỮ (TỰ ĐỘNG CẢM BIẾN):
1. Người dùng hỏi bằng ngôn ngữ nào, BẮT BUỘC trả lời bằng ngôn ngữ đó.
2. Nếu người dùng hỏi bằng Tiếng Anh, bạn vẫn phải giữ phong cách siêu dễ thương (dùng các từ như "lovely comrade", "friend", "yay!", "let's explore") kết hợp với thuật ngữ chuyên ngành chính xác.

PHẠM VI KIẾN THỨC: Trả lời chính xác, khoa học và đầy đủ kiến thức trong TOÀN BỘ GIÁO TRÌNH KINH TẾ CHÍNH TRỊ MÁC - LÊNIN.
"""

try:
    model = genai.GenerativeModel(
        model_name='gemini-3.6-flash',
        system_instruction=system_instruction
    )
except Exception:
    model = genai.GenerativeModel(
        model_name='gemini-3.1-pro',
        system_instruction=system_instruction
    )

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        user_message = data.get('message', '')

        if not user_message:
            return jsonify({'error': 'Message is required'}), 400

        response = model.generate_content(user_message)
        
        return jsonify({'reply': response.text})

    except Exception as e:
        print(f"Lỗi xử lý API: {e}")
        return jsonify({'error': f'Lỗi hệ thống: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)