// Storing a function in a variable
const printSum = function(a, b){
    console.log("The Value sum is: " + a + b)
}

printSum(2, 3)

console.log('--------------')

// Storing a function arrow in a variable
const sum = (a, b) => {
    return a + b
}

console.log(sum(2, 3))

console.log('--------------')

// implicit return
const subtraction = (a, b) => a - b

console.log(subtraction(2, 3))

const print2 = a => console.log(a)
print2('Cool!!!')