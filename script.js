const heroList = document.querySelector(".hero-list");
const images = document.querySelectorAll(".hero-image");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currentIndex = 0;

function updateSlider() {
  const width = window.innerWidth; // chiều rộng ảnh (100vw)
  heroList.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
});

window.addEventListener("resize", updateSlider); // đảm bảo resize vẫn đúng vị trí

const autoSlide = setInterval(() => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateSlider();
  } else {
    clearInterval(autoSlide); // ✅ Dừng khi đến ảnh cuối
  }
}, 3000); // 3 giây mỗi ảnh
