(() => {
  // Pages with a built-in chatbot keep their existing themed interface.
  if (document.getElementById('ai-chatbot-window') || document.getElementById('userQueryInput')) return;

  const style = document.createElement('style');
  style.textContent = `
    #site-ai-toggle{position:fixed;right:24px;bottom:24px;z-index:10000;border:0;border-radius:999px;background:#7f1d1d;color:#fff;padding:14px 18px;font:600 15px system-ui,sans-serif;box-shadow:0 8px 24px #0003;cursor:pointer}
    #site-ai-panel{position:fixed;right:24px;bottom:84px;z-index:10000;width:min(360px,calc(100vw - 32px));height:min(480px,calc(100vh - 120px));display:none;flex-direction:column;background:#fff;color:#1f2937;border:1px solid #e5e7eb;border-radius:16px;box-shadow:0 16px 48px #0003;font:14px system-ui,sans-serif;overflow:hidden}
    #site-ai-panel.open{display:flex}#site-ai-head{padding:14px 16px;background:#7f1d1d;color:#fff;font-weight:700}
    #site-ai-log{padding:14px;flex:1;overflow:auto;display:flex;flex-direction:column;gap:10px}
    .site-ai-message{max-width:88%;padding:10px 12px;border-radius:12px;white-space:pre-wrap;overflow-wrap:anywhere;line-height:1.45}
    .site-ai-message.bot{align-self:flex-start;background:#f3f4f6}.site-ai-message.user{align-self:flex-end;background:#7f1d1d;color:#fff}
    #site-ai-form{display:flex;gap:8px;padding:12px;border-top:1px solid #e5e7eb}
    #site-ai-input{min-width:0;flex:1;border:1px solid #d1d5db;border-radius:999px;padding:10px 12px;font:inherit}
    #site-ai-form button{border:0;border-radius:999px;background:#7f1d1d;color:#fff;padding:0 14px;font:600 14px system-ui,sans-serif;cursor:pointer}
  `;
  document.head.append(style);

  const toggle = document.createElement('button');
  toggle.id = 'site-ai-toggle';
  toggle.type = 'button';
  toggle.textContent = '✨ Hỏi AI';
  toggle.setAttribute('aria-controls', 'site-ai-panel');
  toggle.setAttribute('aria-expanded', 'false');

  const panel = document.createElement('section');
  panel.id = 'site-ai-panel';
  panel.setAttribute('aria-label', 'Trợ lý AI');
  panel.innerHTML = '<div id="site-ai-head">Trợ lý Kinh tế Chính trị ✨</div><div id="site-ai-log" aria-live="polite"></div><form id="site-ai-form"><input id="site-ai-input" type="text" maxlength="2000" placeholder="Nhập câu hỏi..." autocomplete="off" aria-label="Câu hỏi"><button type="submit">Gửi</button></form>';
  document.body.append(toggle, panel);

  const log = panel.querySelector('#site-ai-log');
  const input = panel.querySelector('#site-ai-input');
  const form = panel.querySelector('#site-ai-form');
  const addMessage = (text, sender) => {
    const message = document.createElement('div');
    message.className = `site-ai-message ${sender}`;
    message.textContent = text;
    log.append(message);
    log.scrollTop = log.scrollHeight;
    return message;
  };
  addMessage('Chào bạn! Mình có thể giúp gì về Kinh tế Chính trị Mác – Lênin? 🥰', 'bot');

  toggle.addEventListener('click', () => {
    const open = panel.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    if (open) input.focus();
  });
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const question = input.value.trim();
    if (!question) return;
    addMessage(question, 'user');
    input.value = '';
    input.disabled = true;
    const pending = addMessage('Mình đang tìm câu trả lời…', 'bot');
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question })
      });
      const data = await response.json();
      pending.textContent = response.ok && data.reply ? data.reply : (data.error || 'AI chưa thể trả lời lúc này.');
    } catch (error) {
      pending.textContent = 'Không thể kết nối tới máy chủ AI. Vui lòng thử lại sau.';
      console.error('AI chat request failed:', error);
    } finally {
      input.disabled = false;
      input.focus();
      log.scrollTop = log.scrollHeight;
    }
  });
})();
