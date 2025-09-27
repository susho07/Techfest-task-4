
const ctaBtn = document.getElementById("cta-btn");
ctaBtn.addEventListener("mouseenter", () => {
  ctaBtn.style.transform = "scale(1.1)";
});
ctaBtn.addEventListener("mouseleave", () => {
  ctaBtn.style.transform = "scale(1)";
});
ctaBtn.addEventListener("click", () => {
  alert("🚀 You're exploring CSS Magic!");
});

const illustration = document.querySelector(".illustration");
const shapes = document.querySelectorAll(".circle, .triangle, .square, .orbit");

illustration.addEventListener("mousemove", (e) => {
  const { offsetX, offsetY } = e;
  const centerX = illustration.offsetWidth / 2;
  const centerY = illustration.offsetHeight / 2;

  const moveX = (offsetX - centerX) / 20;
  const moveY = (offsetY - centerY) / 20;

  shapes.forEach(shape => {
    shape.style.transform += ` translate(${moveX}px, ${moveY}px)`;
  });
});

illustration.addEventListener("mouseleave", () => {
  shapes.forEach(shape => {
    shape.style.transform = "";
  });
});

ctaBtn.addEventListener("click", () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
});