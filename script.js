function toggleChat() {
  const chat = document.getElementById("chatContainer");
  chat.style.display = chat.style.display === "flex" ? "none" : "flex";
  chat.style.flexDirection = "column";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  if (input.value.trim() === "") return;

  // User message
  const userMsg = document.createElement("div");
  userMsg.textContent = "You: " + input.value;
  userMsg.style.color = "#00f5ff";
  chatBox.appendChild(userMsg);

  // AI reply
  const aiMsg = document.createElement("div");
  aiMsg.textContent = "AI: " + getAIResponse(input.value);
  aiMsg.style.color = "white";
  chatBox.appendChild(aiMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getAIResponse(message) {
  message = message.toLowerCase();

  if (message.includes("hello"))
    return "Hello Dhruv! How can I help you today? 🚀";

  if (message.includes("project"))
    return "I suggest building an AI-powered startup idea! 🤖";

  if (message.includes("ai"))
    return "AI is the future. Let's build something powerful! 🔥";

  return "That’s interesting! Tell me more about it 😎";
}
