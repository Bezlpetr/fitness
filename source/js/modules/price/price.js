const priceButtonElements = document.querySelectorAll('.price__month-button');
const priceElements = document.querySelectorAll('.card__price');
const cardElements = document.querySelectorAll('.card');

const onPriceButtonClick = (evt) => {
  if (!evt.target.classList.contains('is-active')) {
    document.querySelector('.price__month-button.is-active').classList.remove('is-active');

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
    document.querySelector('.card.is-active').classList.remove('is-active');

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
