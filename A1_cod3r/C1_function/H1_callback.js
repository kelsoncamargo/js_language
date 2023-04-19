const manufacturers = ['Mercedes', 'Audi', 'BMW']

function print(name, index){
    console.log(`${index}. ${name}`)
}

manufacturers.forEach(print)
manufacturers.forEach(function(manufacturer) {
    console.log(manufacturer)
})
manufacturers.forEach(manufacturer => console.log(manufacturer))