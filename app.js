const form = document.getElementById("chatForm");
const input = document.getElementById("userInput");
const messages = document.getElementById("messages");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";
  input.focus();

  window.setTimeout(() => addMessage(localReply(text), "bot"), 350);
});

function addMessage(text, type) {
  const message = document.createElement("div");
  message.className = `message ${type}`;
  message.textContent = text;
  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
}

function localReply(text) {
  const value = text.toLowerCase();
  if (/\b(hi|hello|hey)\b/.test(value)) return "Hello! 😊 I'm Kumar 001. How are you feeling today?";
  if (value.includes("your name") || value.includes("who are you")) return "I'm Kumar 001 — your friendly AI companion starter.";
  if (value.includes("help") || value.includes("problem")) return "I'm listening. Tell me a little more about the problem, and we'll think through the next step together.";
  if (value.includes("sad") || value.includes("lonely") || value.includes("upset")) return "I'm sorry things feel difficult. 💙 You don't have to explain everything at once. What happened?";
  if (value.includes("idea") || value.includes("creative")) return "Let's explore a few ideas together. What is your goal, and what limits should we work within?";
  if (value.includes("thank")) return "You're welcome! 😊 I'm glad to help.";
  return "I hear you. 💙 Tell me a little more so I can understand and help you better.";
}
