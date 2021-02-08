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

