// new feature of the ES2015

const person = {
    youName: 'Ana',
    age: 5,
    address: {
        logradouro: "Rua ABC",
        number: 1000
    }
}


const { youName, age } = person 
console.log(youName, age)

const { youName: n, age: i} = person
console.log(n, i)

const { lastName, goodHumored = true} = person
console.log(lastName, goodHumored)

const {address: {logradouro, number, cep} } = person
console.log(logradouro, number, cep)