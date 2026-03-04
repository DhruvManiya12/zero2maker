const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", function() {
  alert("Contact: dhruv@example.com 🚀");
});

/* Smooth background animation */
let angle = 0;

setInterval(() => {
  angle += 0.3;
  document.body.style.background =
    `linear-gradient(${angle}deg, #0f0c29, #302b63, #24243e)`;
}, 100);
