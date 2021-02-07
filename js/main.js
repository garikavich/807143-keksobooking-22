const generatesNumber = function (min, max, dote) {
  let computation = (Math.random() * (max - min) + min).toFixed(dote)
  if (computation >= 0 && max > min && min != max && min >= 0 && max >=0) {
    return computation
  }
  return null;
}

generatesNumber(-2, 4, 2)
