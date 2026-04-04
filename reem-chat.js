// REEM AI Chatbot Widget
(function() {

const RESPONSES = {
  greet: [
    "Hi! I'm REEM Assistant 🧠 I can answer questions about the REEM system, Alzheimer's detection, and the research behind it. What would you like to know?",
    "Hello! Welcome to REEM. I'm here to help you understand our early Alzheimer's detection system. Ask me anything!"
  ],
  accuracy: [
    "REEM achieves <strong>98.67% test accuracy</strong> with an F1-Score of 0.99. The model correctly classified 100% of Healthy, MCI, and Alzheimer's patients in live demo testing.",
    "Our CNN-LSTM model reached <strong>98.67% accuracy</strong> — far exceeding our initial hypothesis target of ≥85%. The model stopped training early at epoch 12 with 100% validation accuracy."
  ],
  model: [
    "REEM uses a <strong>hybrid CNN-LSTM architecture</strong>:<br>• Conv1D layers extract spatial EEG features<br>• LSTM layers capture temporal brain signal patterns<br>• 214,531 total parameters<br>• Trained on TensorFlow 2.19.0",
    "The model combines <strong>Convolutional Neural Networks</strong> for spatial feature extraction and <strong>Long Short-Term Memory</strong> networks for temporal pattern recognition — achieving superior results over either architecture alone."
  ],
  classes: [
    "REEM classifies brain signals into <strong>3 classes</strong>:<br>• ✅ <strong>Healthy</strong> — No cognitive decline detected<br>• ⚠️ <strong>MCI</strong> — Mild Cognitive Impairment (early warning)<br>• 🔴 <strong>Alzheimer's</strong> — Alzheimer's patterns detected",
    "The system detects 3 stages: <strong>Healthy Controls</strong>, <strong>MCI (Mild Cognitive Impairment)</strong> — the critical early stage — and <strong>Alzheimer's Disease</strong>. Early MCI detection is where REEM makes the biggest clinical difference."
  ],
  fnirs: [
    "<strong>fNIRS (Functional Near-Infrared Spectroscopy)</strong> uses near-infrared light to measure blood oxygenation in the brain — specifically the prefrontal cortex, the first region affected by Alzheimer's. It's non-invasive, wearable, and silent — unlike MRI or PET scans.",
    "fNIRS measures <strong>hemodynamic brain activity</strong> using infrared light. It's the sensor layer of REEM — portable, non-invasive, and suitable for continuous real-world monitoring."
  ],
  federated: [
    "<strong>Federated Learning</strong> allows REEM to train AI models without ever moving patient data off the device. Each device trains locally and only shares encrypted gradient updates — making REEM fully <strong>GDPR & HIPAA compliant</strong>.",
    "With Federated Learning, patient brain data <strong>never leaves the device</strong>. The global model improves from many patients without centralizing sensitive data — privacy by design."
  ],
  dataset: [
    "REEM was trained on <strong>1,000 synthetic EEG samples</strong>:<br>• 333 Healthy patients<br>• 333 MCI patients<br>• 334 Alzheimer's patients<br>• 19 EEG channels, 128 timesteps<br>• Split: 70% train / 15% val / 15% test",
    "The dataset contains <strong>1,000 EEG samples</strong> across 3 balanced classes, with 19 channels and 128 timesteps per sample. StandardScaler normalization was applied before training."
  ],
  alzheimer: [
    "Alzheimer's disease affects <strong>55+ million people worldwide</strong>. By 2050, this number is expected to reach 139 million. Currently, 75% of patients are diagnosed too late for effective intervention — which is exactly why REEM's early detection matters.",
    "<strong>Alzheimer's disease</strong> is a progressive neurodegenerative disorder. Early detection during the MCI stage allows for intervention before significant brain damage occurs — REEM targets this critical window."
  ],
  developer: [
    "REEM was built entirely by <strong>Mariam Maher</strong> — a solo AI researcher passionate about applying deep learning to solve real medical challenges. The entire system, from dataset design to web platform, was developed independently.",
    "<strong>Mariam Maher</strong> is the sole researcher and developer behind REEM — handling everything from literature review, model architecture, Federated Learning simulation, to this full web platform."
  ],
  tes: [
    "<strong>tES (Transcranial Electrical Stimulation)</strong> delivers safe, low-intensity electrical currents to support cognitive function. This moves REEM beyond diagnosis into active therapeutic intervention — powered by bioenergy harvesting for sustainability.",
    "The tES component delivers gentle electrical stimulation to affected brain regions, potentially slowing cognitive decline. Combined with bioenergy harvesting, REEM becomes a fully sustainable diagnostic + therapeutic wearable."
  ],
  default: [
    "That's a great question! REEM focuses on early Alzheimer's detection using fNIRS signals and CNN-LSTM deep learning. Could you ask something more specific? Try asking about the <strong>model accuracy</strong>, <strong>fNIRS sensor</strong>, or <strong>Federated Learning</strong>.",
    "I'm not sure I understood that fully. I can help with questions about:<br>• Model accuracy & architecture<br>• fNIRS sensor technology<br>• Federated Learning & privacy<br>• Dataset & training details<br>• Alzheimer's & MCI detection"
  ]
};

function getResponse(input) {
  const msg = input.toLowerCase();
  if (/hi|hello|hey|مرحبا|هاي|سلام/.test(msg)) return rand(RESPONSES.greet);
  if (/accura|f1|result|score|percent|%|دقة|نتيجة/.test(msg)) return rand(RESPONSES.accuracy);
  if (/model|cnn|lstm|architect|network|نموذج/.test(msg)) return rand(RESPONSES.model);
  if (/class|healthy|mci|alzheimer|categor|فئة|تصنيف/.test(msg)) return rand(RESPONSES.classes);
  if (/fnirs|fnir|infrared|sensor|signal|إشارة/.test(msg)) return rand(RESPONSES.fnirs);
  if (/federal|privacy|gdpr|hipaa|data|بيانات|خصوصية/.test(msg)) return rand(RESPONSES.federated);
  if (/dataset|data|sample|train|1000|بيانات|عينة/.test(msg)) return rand(RESPONSES.dataset);
  if (/alzheimer|dementia|disease|مرض|زهايمر/.test(msg)) return rand(RESPONSES.alzheimer);
  if (/who|developer|mariam|built|made|مريم|مطور/.test(msg)) return rand(RESPONSES.developer);
  if (/tes|stimul|therap|bioenergy|علاج/.test(msg)) return rand(RESPONSES.tes);
  return rand(RESPONSES.default);
}

function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

const style = document.createElement('style');
style.textContent = `
#reem-chat-btn {
  position: fixed; bottom: 28px; right: 28px; z-index: 9999;
  width: 56px; height: 56px; border-radius: 50%;
  background: linear-gradient(135deg, #0ea5e9, #22d3ee);
  border: none; cursor: pointer; display: flex; align-items: center; justify-content: center;
  box-shadow: 0 0 30px rgba(14,165,233,.5), 0 4px 20px rgba(0,0,0,.3);
  transition: all .3s; font-size: 22px;
  animation: chatPulse 3s ease-in-out infinite;
}
#reem-chat-btn:hover { transform: scale(1.1); box-shadow: 0 0 50px rgba(34,211,238,.6); }
@keyframes chatPulse {
  0%,100% { box-shadow: 0 0 30px rgba(14,165,233,.5), 0 4px 20px rgba(0,0,0,.3); }
  50% { box-shadow: 0 0 50px rgba(34,211,238,.7), 0 4px 20px rgba(0,0,0,.3); }
}
#reem-chat-panel {
  position: fixed; bottom: 96px; right: 28px; z-index: 9998;
  width: 360px; height: 520px;
  background: #020b18; border: 1px solid rgba(14,165,233,.25);
  border-radius: 12px; display: flex; flex-direction: column;
  box-shadow: 0 20px 60px rgba(0,0,0,.5), 0 0 40px rgba(14,165,233,.1);
  transform: scale(0.85) translateY(20px); opacity: 0; pointer-events: none;
  transition: all .3s cubic-bezier(.34,1.56,.64,1); overflow: hidden;
}
#reem-chat-panel.open { transform: scale(1) translateY(0); opacity: 1; pointer-events: all; }
#reem-chat-header {
  padding: 16px 18px; border-bottom: 1px solid rgba(14,165,233,.15);
  background: rgba(7,22,40,.9);
  display: flex; align-items: center; justify-content: space-between; flex-shrink: 0;
}
.reem-chat-title { display: flex; align-items: center; gap: 10px; }
.reem-chat-avatar {
  width: 34px; height: 34px; border-radius: 50%;
  background: linear-gradient(135deg,#0ea5e9,#22d3ee);
  display: flex; align-items: center; justify-content: center; font-size: 14px;
  box-shadow: 0 0 12px rgba(14,165,233,.4);
}
.reem-chat-name { font-family: 'Syne', sans-serif; font-size: .88rem; font-weight: 700; color: #e2eaf4; }
.reem-chat-status { font-family: 'DM Mono', monospace; font-size: .58rem; color: #22d3ee; letter-spacing: .08em; display: flex; align-items: center; gap: 5px; }
.reem-status-dot { width: 6px; height: 6px; border-radius: 50%; background: #22d3ee; animation: statusBlink 1.5s infinite; }
@keyframes statusBlink { 0%,100%{opacity:1} 50%{opacity:.3} }
#reem-chat-close { background: none; border: none; color: #6b8ca8; cursor: pointer; font-size: 18px; line-height: 1; padding: 4px; transition: color .2s; }
#reem-chat-close:hover { color: #e2eaf4; }
#reem-chat-messages {
  flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 12px;
  scrollbar-width: thin; scrollbar-color: rgba(14,165,233,.2) transparent;
}
#reem-chat-messages::-webkit-scrollbar { width: 4px; }
#reem-chat-messages::-webkit-scrollbar-thumb { background: rgba(14,165,233,.2); border-radius: 2px; }
.reem-msg { max-width: 85%; display: flex; flex-direction: column; gap: 4px; }
.reem-msg.bot { align-self: flex-start; }
.reem-msg.user { align-self: flex-end; }
.reem-bubble { padding: 10px 14px; border-radius: 10px; font-size: .82rem; line-height: 1.65; font-family: 'DM Sans', sans-serif; }
.reem-msg.bot .reem-bubble { background: rgba(14,165,233,.08); border: 1px solid rgba(14,165,233,.15); color: #e2eaf4; border-bottom-left-radius: 3px; }
.reem-msg.user .reem-bubble { background: linear-gradient(135deg,#0ea5e9,#22d3ee); color: #020b18; font-weight: 500; border-bottom-right-radius: 3px; }
.reem-time { font-family: 'DM Mono', monospace; font-size: .55rem; color: #6b8ca8; }
.reem-msg.user .reem-time { text-align: right; }
.reem-typing { display: flex; align-items: center; gap: 5px; padding: 10px 14px; background: rgba(14,165,233,.06); border: 1px solid rgba(14,165,233,.12); border-radius: 10px; border-bottom-left-radius: 3px; width: fit-content; }
.reem-typing span { width: 6px; height: 6px; border-radius: 50%; background: #22d3ee; animation: typingDot .8s ease-in-out infinite; }
.reem-typing span:nth-child(2) { animation-delay: .15s; }
.reem-typing span:nth-child(3) { animation-delay: .3s; }
@keyframes typingDot { 0%,80%,100%{transform:scale(.6);opacity:.4} 40%{transform:scale(1);opacity:1} }
.reem-suggestions { display: flex; flex-wrap: wrap; gap: 6px; padding: 0 16px 12px; flex-shrink: 0; }
.reem-sugg { font-family: 'DM Mono', monospace; font-size: .6rem; letter-spacing: .06em; padding: 5px 10px; border-radius: 3px; border: 1px solid rgba(14,165,233,.25); color: #22d3ee; background: rgba(14,165,233,.05); cursor: pointer; transition: all .2s; }
.reem-sugg:hover { background: rgba(14,165,233,.15); border-color: rgba(14,165,233,.5); }
#reem-chat-input-wrap { padding: 12px 16px; border-top: 1px solid rgba(14,165,233,.12); background: rgba(7,22,40,.6); display: flex; gap: 8px; flex-shrink: 0; }
#reem-chat-input { flex: 1; background: rgba(14,165,233,.06); border: 1px solid rgba(14,165,233,.2); border-radius: 6px; padding: 10px 14px; color: #e2eaf4; font-family: 'DM Sans', sans-serif; font-size: .82rem; outline: none; transition: border-color .2s; }
#reem-chat-input:focus { border-color: rgba(14,165,233,.5); }
#reem-chat-input::placeholder { color: #6b8ca8; }
#reem-chat-send { width: 38px; height: 38px; border-radius: 6px; flex-shrink: 0; align-self: flex-end; background: linear-gradient(135deg,#0ea5e9,#22d3ee); border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all .2s; font-size: 15px; }
#reem-chat-send:hover { transform: scale(1.05); box-shadow: 0 0 20px rgba(14,165,233,.4); }
@media(max-width:480px) { #reem-chat-panel { width: calc(100vw - 32px); right: 16px; bottom: 88px; } }
`;
document.head.appendChild(style);

const btn = document.createElement('button');
btn.id = 'reem-chat-btn';
btn.innerHTML = '🧠';
btn.title = 'REEM AI Assistant';

const panel = document.createElement('div');
panel.id = 'reem-chat-panel';
panel.innerHTML = `
  <div id="reem-chat-header">
    <div class="reem-chat-title">
      <div class="reem-chat-avatar">🧠</div>
      <div>
        <div class="reem-chat-name">REEM Assistant</div>
        <div class="reem-chat-status"><span class="reem-status-dot"></span>Online · AI Powered</div>
      </div>
    </div>
    <button id="reem-chat-close">✕</button>
  </div>
  <div id="reem-chat-messages"></div>
  <div class="reem-suggestions">
    <span class="reem-sugg">Model accuracy?</span>
    <span class="reem-sugg">What is fNIRS?</span>
    <span class="reem-sugg">How does FL work?</span>
    <span class="reem-sugg">3 classes?</span>
  </div>
  <div id="reem-chat-input-wrap">
    <input id="reem-chat-input" placeholder="Ask about REEM..." maxlength="200"/>
    <button id="reem-chat-send">➤</button>
  </div>
`;

document.body.appendChild(btn);
document.body.appendChild(panel);

const messages = panel.querySelector('#reem-chat-messages');
const input = panel.querySelector('#reem-chat-input');

function getTime() { return new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}); }

function addMsg(text, type) {
  const div = document.createElement('div');
  div.className = `reem-msg ${type}`;
  div.innerHTML = `<div class="reem-bubble">${text}</div><div class="reem-time">${getTime()}</div>`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function showTyping() {
  const t = document.createElement('div');
  t.className = 'reem-msg bot'; t.id = 'reem-typing';
  t.innerHTML = `<div class="reem-typing"><span></span><span></span><span></span></div>`;
  messages.appendChild(t);
  messages.scrollTop = messages.scrollHeight;
}

function removeTyping() { const t = document.getElementById('reem-typing'); if (t) t.remove(); }

function send(text) {
  if (!text.trim()) return;
  addMsg(text, 'user'); input.value = ''; showTyping();
  setTimeout(() => { removeTyping(); addMsg(getResponse(text), 'bot'); }, 800 + Math.random() * 600);
}

setTimeout(() => {
  addMsg("Hi! I'm <strong>REEM Assistant</strong> 🧠<br>Ask me anything about the REEM Alzheimer's detection system!", 'bot');
}, 400);

btn.addEventListener('click', () => { panel.classList.toggle('open'); if (panel.classList.contains('open')) input.focus(); });
panel.querySelector('#reem-chat-close').addEventListener('click', () => panel.classList.remove('open'));
panel.querySelector('#reem-chat-send').addEventListener('click', () => send(input.value));
input.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input.value); } });
panel.querySelectorAll('.reem-sugg').forEach(s => s.addEventListener('click', () => send(s.textContent)));

})();
