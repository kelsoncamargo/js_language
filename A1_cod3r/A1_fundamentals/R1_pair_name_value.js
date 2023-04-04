// Piar name value
const salutation = "Opa"  // lexial context 1

function exec(){
    const salutation = "Falaaa" // Lexeial Context 2
    return salutation
}

// Objects are nested grups of name/value pairs 
const clinet = {
    youName: "Pedro",
    age: "32",
    weight: 90,
    adress: {
        publicPlace: "Rua muito legal",
        numberHouse: 123
    }
}

console.log(salutation)
console.log(exec())
console.log(clinet)