const slides = document.getElementsByClassName("slide");
const images = document.getElementsByClassName("slideimg");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentSlide = 0;

nextButton.addEventListener("click", function(){
    slides[currentSlide].classList.remove("active");
    images[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % 2;

    slides[currentSlide].classList.add("active");
    images[currentSlide].classList.add("active");
});

prevButton.addEventListener("click", function(){
    slides[currentSlide].classList.remove("active");
    images[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % 2;

    slides[currentSlide].classList.add("active");
    images[currentSlide].classList.add("active");
});