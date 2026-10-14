
document.getElementById("year").textContent = new Date().getFullYear();

var darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    darkBtn.textContent = "Light Mode";
  } else {
    darkBtn.textContent = "Dark Mode";
  }
});

document.getElementById("menuBtn").addEventListener("click", function () {
  document.getElementById("menu").classList.toggle("open");
});

var slides = document.querySelectorAll(".slide");
var current = 0;

function showSlide(n) {
  slides[current].classList.remove("show");
  current = n;
  if (current >= slides.length) current = 0;
  if (current < 0) current = slides.length - 1;
  slides[current].classList.add("show");
}

if (slides.length > 0) {
  document.getElementById("next").addEventListener("click", function () {
    showSlide(current + 1);
  });
  document.getElementById("prev").addEventListener("click", function () {
    showSlide(current - 1);
  });
  setInterval(function () {
    showSlide(current + 1);
  }, 5000);
}