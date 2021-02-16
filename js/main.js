const SIMILAR_COUNT_DATA = 10;
const AVATAR = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/use04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
]
const TITLE = ['Чернигов', 'Киев', 'Одесса', 'Днепропетровск', 'Львов']
const ADDRESS = ['{{location.x}}', '{{location.y}}']
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
  'bar24h',
  'sport place',
  'free wi-fi',
  'wheelchair accessible',
  'babysitting',
  'conference center',
]
const DESCRIPTION = ['Не далеко от центра', 'Далеко от центра', 'Рынок близко', 'ТЦ близко']
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
  'http://o0.github.io/assets/images/kiev/hostel5.jpg',
  'http://o0.github.io/assets/images/kiev/hostel7.jpg',
  'http://o0.github.io/assets/images/kiev/hostel50.jpg',
]
const LOCATION_X = [35.65000, 35.70000]
const LOCATION_Y = [139.70000, 139.80000]

const generatesNumberFloat = function (min, max, dote) {
  if (max <= min || min < 0 || max < 0) {
    throw new Error('Error')
  }
  return (Math.random() * (max - min) + min).toFixed(dote)
}

generatesNumberFloat(2, 8)

const generatesNumberInteger = function (min, max) {
  if (max <= min || min < 0 || max < 0) {
    throw new Error('Error')
  }
  return Math.round(Math.random() * (max - min) + min)
}

generatesNumberInteger(2, 8)

const getSliceArray = function (array) {
  return array.slice(0, generatesNumberInteger(0, array.length - 1)).join(', ')
}

const getRandomElementArray = function (array) {
  return array[generatesNumberInteger(0, array.length - 1)]
}

const getDataString = function (data) {
  return data.join(', ')
}

const generateRandomData = function () {
  return {
    author: {
      avatar: getRandomElementArray(AVATAR),
    },
    offer: {
      title: getRandomElementArray(TITLE),
      address: getDataString(ADDRESS),
      price: getRandomElementArray(PRICE),
      type: getRandomElementArray(TYPE),
      rooms: getRandomElementArray(ROOMS),
      guests: getRandomElementArray(GUESTS),
      checkin: getRandomElementArray(CHECKIN),
      checkout: getRandomElementArray(CHECKOUT),
      features: getSliceArray(FEATURES),
      description: getRandomElementArray(DESCRIPTION),
      photos: getSliceArray(PHOTOS),
    },
    location: {
      locationX: generatesNumberFloat(LOCATION_X[0], LOCATION_X[1], 4),
      locationY: generatesNumberFloat(LOCATION_Y[0], LOCATION_Y[1], 4),
    },
  }
}

new Array(SIMILAR_COUNT_DATA).fill(null).map(generateRandomData);
