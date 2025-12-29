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

const sections = document.querySelectorAll(".planet-section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      // اول همه سیاره‌ها غیرفعال
      sections.forEach(sec => sec.classList.remove("active"));

      // فقط این یکی فعال
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.6
});

sections.forEach(section => observer.observe(section));
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
