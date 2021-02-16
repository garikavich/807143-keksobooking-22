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

const SIMILAR_COUNT_DATA = 10;
const AVATAR = ['img/avatars/user{{01}}.png', 'img/avatars/user{{02}}.png', 'img/avatars/user{{03}}.png', 'img/avatars/user{{04}}.png', 'img/avatars/user{{05}}.png', 'img/avatars/user{{06}}.png', 'img/avatars/user{{07}}.png', 'img/avatars/user{{08}}.png']
const TITLE = ['Чернигов', 'Киев', 'Одесса', 'Днепропетровск', 'Львов']
const ADDRESS = ['{{location.x}}', '{{location.y}}']
const PRICE = [100, 200]
const TYPE = ['palace', 'flat', 'house', 'bungalow']
const ROOMS = [1, 2, 3]
const GUESTS = [1, 2, 3]
const CHECKIN = ['12:00', '13:00', '14:00']
const CHECKOUT = ['12:00', '13:00', '14:00']
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']
const DESCRIPTION = ['Не далеко от центра', 'Далеко от центра', 'Рынок близко', 'ТЦ близко']
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
const LOCATION_X = ['35.65000', '35.70000']
const LOCATION_Y = ['139.70000', '139.80000']

const getRundomElementArray = function (array) {
  return array[generatesNumberInteger(0, array.length - 1)]
}

const generateRandomData = function () {
  let avatar = getRundomElementArray(AVATAR)
  let title = getRundomElementArray(TITLE)
  let address = getRundomElementArray(ADDRESS)
  let price = getRundomElementArray(PRICE)
  let type = getRundomElementArray(TYPE)
  let rooms = getRundomElementArray(ROOMS)
  let guests = getRundomElementArray(GUESTS)
  let checkin = getRundomElementArray(CHECKIN)
  let checkout = getRundomElementArray(CHECKOUT)
  let features = getRundomElementArray(FEATURES)
  let description = getRundomElementArray(DESCRIPTION)
  let photos = getRundomElementArray(PHOTOS)
  let location_x = getRundomElementArray(LOCATION_X)
  let location_y = getRundomElementArray(LOCATION_Y)

  return {
    author: { avatar },
    offer: { title, address, price, type, rooms, guests, checkin, checkout, features, description, photos },
    location: { location_x, location_y },
  }
}

new Array(SIMILAR_COUNT_DATA).fill(null).map(() => generateRandomData())



