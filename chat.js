// Hàm gửi câu hỏi sang backend Flask trên Vercel
async function askAI(userMessage) {
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userMessage })
        });

        const data = await response.json();

        if (response.ok) {
            return data.reply;
        } else {
            console.error("Lỗi AI:", data.error);
            return "Có lỗi xảy ra khi kết nối với AI!";
        }
    } catch (error) {
        console.error("Lỗi kết nối:", error);
        return "Không thể kết nối tới máy chủ!";
    }
}
