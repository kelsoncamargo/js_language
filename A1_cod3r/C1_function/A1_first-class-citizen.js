// Function in JS is First-Class Object (Citizens)
// Higher-order function

// Create literal form funtion
function fun1() { }

// Storage in variable
const fun2 = function() { }

// Storage in Array
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))

// Storage in atribute of object
const obj = { }
obj.speak = function() {return 'Opa'}
console.log(obj.speak())

// Send function how param
function run(fun){
    fun()
}

run(function () {console.log('Executando...')})

// A function can return/contain a function
function sum(a, b){
    return function (c) {
        console.log(a + b + c)
    }
}

sum(2,4)(4)
const cincoMais = sum(2,3)
cincoMais(4)