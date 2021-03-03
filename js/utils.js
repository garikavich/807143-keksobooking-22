const generatesNumberFloat = function (min, max, dote) {
  if (max <= min || min < 0 || max < 0) {
    throw new Error('Error')
  }
  return (Math.random() * (max - min) + min).toFixed(dote)
}

const generatesNumberInteger = function (min, max) {
  if (max <= min || min < 0 || max < 0) {
    throw new Error('Error')
  }
  return Math.round(Math.random() * (max - min) + min)
}


const getSliceArray = function (array) {
  return array.slice(0, generatesNumberInteger(0, array.length - 1))
}

const getRandomElementArray = function (array) {
  return array[generatesNumberInteger(0, array.length - 1)]
}

export {generatesNumberFloat, generatesNumberInteger, getSliceArray, getRandomElementArray}
