const card = document.getElementById("card");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const confetti = document.getElementById("confetti");

openBtn.addEventListener("click", () => {
  card.classList.add("open");

  createConfetti();
});

closeBtn.addEventListener("click", () => {
  card.classList.remove("open");
});

function createConfetti() {
  for (let i = 0; i < 80; i++) {
    const piece = document.createElement("div");

    piece.classList.add("confetti-piece");

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.animationDelay = Math.random() * 1.5 + "s";

    const colors = [
      "#ff4f81",
      "#ffd166",
      "#06d6a0",
      "#118ab2",
      "#9b5de5"
    ];

    piece.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    piece.style.transform =
      `rotate(${Math.random() * 360}deg)`;

    confetti.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 4000);
  }
}