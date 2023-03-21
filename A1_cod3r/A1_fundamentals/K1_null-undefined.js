let value // Uninitialized
console.log(value)

value = null // Lack of value
console.log(value)
// console.log(value.toString()) // Error!

const prod = {}
console.log(prod.price)
console.log(prod)

prod.price = 3.50
console.log(prod)
prod.price = undefined
console.log(prod) // Avoid assign undefined
console.log(!!prod.price)
// delete prod.price
console.log(prod)

prod.price = null
console.log(prod)