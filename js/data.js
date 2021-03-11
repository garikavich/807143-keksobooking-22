import { generatesNumberFloat, getSliceArray, getRandomElementArray } from './utils.js';

const SIMILAR_COUNT_DATA = 10;

const AVATAR = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
]
const TITLE = ['Чернигов', 'Киев', 'Одесса', 'Днепропетровск', 'Львов']
const PRICE = [100, 200]
const TYPE = ['palace', 'flat', 'house', 'bungalow']
const ROOMS = [1, 2, 3]
const GUESTS = [1, 2, 3]
const CHECKIN = ['12:00', '13:00', '14:00']
const CHECKOUT = ['12:00', '13:00', '14:00']
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
]
const DESCRIPTION = ['Не далеко от центра', 'Далеко от центра', 'Рынок близко', 'ТЦ близко']
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]
const LOCATION_X = [35.65000, 35.70000]
const LOCATION_Y = [139.70000, 139.80000]

const generateRandomData = function () {
  return {
    author: {
      avatar: getRandomElementArray(AVATAR),
    },
    offer: {
      title: getRandomElementArray(TITLE),
      address: 'location.x location.y',
      price: getRandomElementArray(PRICE),
      type: getRandomElementArray(TYPE),
      rooms: getRandomElementArray(ROOMS),
      guests: getRandomElementArray(GUESTS),
      checkin: getRandomElementArray(CHECKIN),
      checkout: getRandomElementArray(CHECKOUT),
      features: getSliceArray(FEATURES),
      description: getRandomElementArray(DESCRIPTION),
      photos: PHOTOS,
    },
    location: {
      x: generatesNumberFloat(LOCATION_X[0], LOCATION_X[1], 4),
      y: generatesNumberFloat(LOCATION_Y[0], LOCATION_Y[1], 4),
    },
  }
}

const generateRandomDatas = () => new Array(SIMILAR_COUNT_DATA).fill(null).map(generateRandomData);

export {generateRandomDatas}
