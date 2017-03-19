function countdown(callback) {
  setTimeout(callback, 2000)
}
//
// function multiplerValue (earned) {
//   return createMultiplier(mult) {
//   }
// }

function createMultiplier(mult) {
  return (earned) => {return mult * earned}
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(mult, value) {
  return mult * value
}

var doublerWithBind = multiplier.bind(2, null)
var triplerWithBind = multiplier.bind(3, null)
