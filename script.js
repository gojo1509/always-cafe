const heroList = document.querySelector(".hero-list");
const images = document.querySelectorAll(".hero-item");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currentIndex = 0;

function updateSlider() {
  const width = document.querySelector(".hero").offsetWidth;
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
// feedback
document.addEventListener("DOMContentLoaded", function () {
  const feedbackBodies = document.querySelectorAll(".feedback-list .body");
  const allDots = document.querySelectorAll(".dot");

  allDots.forEach((dot) => {
    dot.addEventListener("click", function () {
      // 1. Xác định dot đang bấm là dot số mấy trong nhóm
      const parentDots = dot.parentElement.querySelectorAll(".dot");
      let dotIndex = Array.from(parentDots).indexOf(dot);

      // 2. Hiển thị feedback tương ứng bằng if...else
      if (dotIndex === 0) {
        // Hiện Harry (index 0)
        feedbackBodies.forEach((body, i) => {
          body.style.display = i === 0 ? "block" : "none";
        });
      } else if (dotIndex === 1) {
        // Hiện Draco (index 1)
        feedbackBodies.forEach((body, i) => {
          body.style.display = i === 1 ? "block" : "none";
        });
      } else if (dotIndex === 2) {
        // Hiện Cerdic (index 2)
        feedbackBodies.forEach((body, i) => {
          body.style.display = i === 2 ? "block" : "none";
        });
      }

      // 3. Xử lý class active
      allDots.forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });

  // Mặc định: chỉ hiện Harry
  feedbackBodies.forEach((body, i) => {
    body.style.display = i === 0 ? "block" : "none";
  });
});
