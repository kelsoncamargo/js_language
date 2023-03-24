// Function no return
function printSum(a, b){
    console.log("The sum is: " + (a + b))
}

printSum(10, 10)
printSum(10)

console.log('---------------')

// Function with return
function sum(a, b = 0){
    return a + b
}

console.log(sum(2, 3))
console.log(sum(2))
console.log(sum())