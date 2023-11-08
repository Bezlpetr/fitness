const initJurySlider = () => {
  const mainSliderElement = document.querySelector('[data-jury-slider]');
  const prevButton = document.querySelector('[data-jury-slider-button-prev]');
  const nextButton = document.querySelector('[data-jury-slider-button-next]');

  return new window.Swiper(mainSliderElement, {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
    breakpoints: {
      // when window width is >= 1366px
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
        allowTouchMove: false,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
        allowTouchMove: true,
        initialSlide: 2,
      },
      // when window width is >= 0px
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: true,
      },
    },
  });
};

export {initJurySlider};
