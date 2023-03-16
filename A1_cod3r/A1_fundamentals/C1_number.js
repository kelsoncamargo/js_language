const weight1 = 1.0
const weight2 = Number('2.0')

console.log(weight1, weight2)
console.log(Number.isInteger(weight1))

const assessment1 = 9.871
const assessment2 = 6.871

const total = assessment1 * weight1 + assessment2 * weight2
const media = total / (weight1 + weight2)
console.log(media.toFixed(2))
console.log(media.toString())
console.log(typeof media)