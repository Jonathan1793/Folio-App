"use strict";
const slides = document.querySelectorAll(".review-item");
const arrowButtons = document.querySelectorAll(".slide-control-container button");
let current = Math.floor(Math.random() * slides.length);
let next = current < slides.length - 1 ? current + 1 : 0;
let prev = current > 0 ? current - 1 : slides.length - 1;
const update = () => {
    slides.forEach((slide) => {
        slide.classList.remove("active", "prev", "next");
    });
    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
};
const goToNum = (number) => {
    current = number;
    next = current < slides.length - 1 ? current + 1 : 0;
    prev = current > 0 ? current - 1 : slides.length - 1;
    update();
};
const goToPrev = () => {
    return current > 0 ? goToNum(current - 1) : goToNum(slides.length - 1);
};
const goToNext = () => {
    return current < slides.length - 1 ? goToNum(current + 1) : goToNum(0);
};
for (let i = 0; i < arrowButtons.length; i++) {
    arrowButtons[i].addEventListener("click", () => i === 0 ? goToPrev() : goToNext());
}
update();
//# sourceMappingURL=carousel.js.map