import {generateRandomDatas} from './data.js';

const mapCanvas = document.querySelector('#map-canvas')
const templateFragmentCard = document.querySelector('#card').content;
const fragment = document.createDocumentFragment();
const similarAds = generateRandomDatas ()
const generateType = function (offer) {
  if (offer.type === 'flat') return 'Квартира';
  if (offer.type === 'bungalow') return 'Бунгало';
  if (offer.type === 'house') return 'Дом';
  if (offer.type === 'palace') return 'Дворец';
}

similarAds.forEach(({offer}) => {
  const adElement = templateFragmentCard.cloneNode(true);
  adElement.querySelector('.popup__title').textContent = offer.title;
  adElement.querySelector('.popup__text--address').textContent = offer.address;
  adElement.querySelector('.popup__text--price').textContent = `${offer.price} грн/ночь`;
  adElement.querySelector('.popup__type').textContent = generateType(offer);
  adElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} ${offer.rooms === 1 ? 'комната' : 'комнаты'} для ${offer.guests} ${offer.guests === 1 ? 'гостя' : 'гостей'}`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  adElement.querySelector('.popup__features').innerHTML = offer.features.map(index => `<li class="popup__feature popup__feature--${index}"></li>`);
  adElement.querySelector('.popup__description').textContent = offer.description;
  adElement.querySelector('.popup__photos').textContent = offer.photos.map(index => `img src="${index}" class="popup__photo" width="45" height="40" alt="Фотография жилья"`);
  fragment.appendChild(adElement);
})

mapCanvas.appendChild(fragment);
