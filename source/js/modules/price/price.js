const priceButtonElements = document.querySelectorAll('[data-month-button]');
const priceElements = document.querySelectorAll('[data-price]');
const cardElements = document.querySelectorAll('[data-card]');

const onPriceButtonClick = (evt) => {
  if (!evt.target.classList.contains('is-active')) {
    document.querySelector('[data-month-button].is-active').classList.remove('is-active');

    evt.target.classList.add('is-active');

    const monthsCount = `data-price-${evt.target.getAttribute('data-months-count')}`;

    priceElements.forEach((priceElement) => {
      const priceShadowElement = priceElement.nextElementSibling;
      const newPrice = priceElement.getAttribute(monthsCount);

      priceElement.textContent = newPrice;
      priceShadowElement.textContent = newPrice;
    });
  }
};

const onCardClick = (evt) => {
  if (!evt.currentTarget.classList.contains('is-active')) {
    document.querySelector('[data-card].is-active').classList.remove('is-active');

    evt.currentTarget.classList.add('is-active');
  }
};

const setPriceButtonsListener = () => {
  priceButtonElements.forEach((element) => {
    element.addEventListener('click', onPriceButtonClick);
  });
};

const setCardsListener = () => {
  cardElements.forEach((element) => {
    element.addEventListener('click', onCardClick);
  });
};

export {setPriceButtonsListener, setCardsListener};
