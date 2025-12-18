// Stars
const stars = document.getElementById("stars");
for (let i = 0; i < 120; i++) {
  const s = document.createElement("div");
  s.className = "star";
  s.style.top = Math.random() * 100 + "%";
  s.style.left = Math.random() * 100 + "%";
  const size = Math.random() * 2 + 1;
  s.style.width = size + "px";
  s.style.height = size + "px";
  s.style.animationDuration = Math.random() * 2 + 1 + "s";
  stars.appendChild(s);
}

// Planet reveal
const sections = document.querySelectorAll(".planet-section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.7) {
      sec.classList.add("active");
    }
  });
});

// Rocket launch
let launched = false;
const rocket = document.getElementById("rocket");

window.addEventListener("scroll", () => {
  if (!launched && window.scrollY > 5) {
    launched = true;
    rocket.style.transition = "transform 2s ease-in";
    rocket.style.transform = "translateY(-120vh)";
  }
});
const shootingStars = document.getElementById("shooting-stars");

setInterval(() => {
  const star = document.createElement("div");
  star.className = "shooting-star";
  star.style.top = Math.random() * 50 + "%";
  star.style.left = Math.random() * 100 + "%";
  shootingStars.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 2500);
}, 1800);
