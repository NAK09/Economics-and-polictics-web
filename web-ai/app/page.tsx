'use client';

import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-pink-50 p-4 md:p-8">
      <header className="w-full max-w-2xl text-center py-4 bg-white rounded-2xl shadow-sm mb-4 border border-pink-100">
        <h1 className="text-2xl font-bold text-pink-600">
          Trợ Lý Triết Học Mác - Lênin 🌸✨
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Giải đáp kiến thức Kinh tế Chính trị siêu dễ hiểu dành cho các đồng chí! 🥰
        </p>
      </header>

      <div className="flex-1 w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-pink-100 p-4 overflow-y-auto mb-20 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 my-12">
            <p className="text-4xl mb-2">🎀</p>
            <p>Chào đồng chí! Hãy đặt câu hỏi về Kinh tế Chính trị Mác - Lênin nhé!</p>
          </div>
        )}

        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                m.role === 'user'
                  ? 'bg-pink-500 text-white rounded-br-none shadow-sm'
                  : 'bg-pink-100/70 text-gray-800 rounded-bl-none border border-pink-200'
              }`}
            >
              <span className="font-semibold block text-xs mb-1 opacity-70">
                {m.role === 'user' ? 'Đồng chí' : 'Trợ lý AI ✨'}
              </span>
              <div className="whitespace-pre-wrap">{m.content}</div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-pink-50 text-pink-500 p-3 rounded-2xl text-xs animate-pulse italic">
              Mình đang suy nghĩ câu trả lời cho đồng chí đây nha... 🍄✨
            </div>
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="fixed bottom-4 w-full max-w-2xl px-4 flex gap-2"
      >
        <input
          className="flex-1 p-3.5 rounded-xl border border-pink-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white text-sm"
          value={input}
          placeholder="Hỏi mình về giá trị thặng dư, tư bản, hàng hóa... 🥰"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="px-5 py-3.5 bg-pink-500 text-white font-medium text-sm rounded-xl shadow-lg hover:bg-pink-600 transition-all active:scale-95"
        >
          Gửi ✨
        </button>
      </form>
    </main>
  );
}