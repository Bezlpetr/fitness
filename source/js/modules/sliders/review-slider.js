const initReviewsSlider = () => {
  const mainSliderElement = document.querySelector('[data-reviews-slider]');
  const prevButton = document.querySelector('[data-reviews-slider-button-prev]');
  const nextButton = document.querySelector('[data-reviews-slider-button-next]');

  return new window.Swiper(mainSliderElement, {
    // Optional parameters
    loop: false,
    autoHeight: true,

    // Navigation arrows
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
    breakpoints: {
      // when window width is >= 1366px
      1366: {
        allowTouchMove: false,
      },
      // when window width is >= 768px
      768: {
        allowTouchMove: true,
      },
      // when window width is >= 0px
      0: {
        allowTouchMove: true,
      },
    },
  });
};

export {initReviewsSlider};
