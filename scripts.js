(function() {
  yoSlider();
  function yoSlider() {
    let sliderClass = ".yo-slider";

    let slider = document.querySelector(sliderClass);
    let slides = slider.querySelectorAll(".yo-slider__item");

    let currentSlide = slider.querySelector(".active");

    let indexOfCurrentSlide = getNodeIndex(currentSlide);

    console.log(indexOfCurrentSlide);

    if (!slider) return;

    let tl = new TimelineMax({
      onComplete: sliderChanged
    });

    let button_prev = slider.querySelector(".js-button__prev");
    let button_next = slider.querySelector(".js-button__next");

    button_prev.addEventListener("click", goToPrevSlider);
    button_next.addEventListener("click", goToNextSlider);

    function sliderChanged() {
      console.log("complete");
    }

    function goToPrevSlider() {
      console.log("previous slider");
    }
    let nextSlide;
    function goToNextSlider() {
      console.log("next slider");

      if (indexOfCurrentSlide === slides.length - 1) {
        nextSlide = slides[0];
      } else {
        nextSlide = slides[indexOfCurrentSlide + 1];
      }
    }
    function getNodeIndex(el) {
      return Array.prototype.indexOf.call(el.parentNode.children, el);
    }
    tl.to(currentSlide.querySelector(".yo-slider__img"), 0.3, { x: "-100" }).to(
      nextSlide,
      0,
      { opacityt: 1, visibility: "visible" }
    );
  }
})();
