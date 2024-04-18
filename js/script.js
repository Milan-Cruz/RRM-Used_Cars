const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");


nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    const maxScrollLeft = slidesContainer.scrollWidth - slidesContainer.clientWidth;

    // Check if at the end, rewind if so
    if (slidesContainer.scrollLeft === maxScrollLeft) {
        slidesContainer.scrollLeft = 0;
    } else {
        // Move to the next slide, but don't go beyond the end
        slidesContainer.scrollLeft = Math.min(slidesContainer.scrollLeft + slideWidth, maxScrollLeft);
    }
});

prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;

    if (slidesContainer.scrollLeft === 0) {
        // Go to last slide
        slidesContainer.scrollLeft = slidesContainer.scrollWidth - slidesContainer.clientWidth;
    } else {
        slidesContainer.scrollLeft -= slideWidth;
    }
});
