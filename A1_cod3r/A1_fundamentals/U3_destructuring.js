function rand( {min = 0, max = 1000} ){
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

const values = {
    min: 50,
    max: 40
}

console.log(rand(values))
console.log(rand({min: 955}))
console.log(rand({}))