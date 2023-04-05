function rand( [min = 0, max = 1000] ){
    if(min > max) [min, max] = [max, min]
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

const values = [50, 40]

console.log(rand(values))
console.log(rand([955]))
console.log(rand([, 955]))
console.log(rand([]))
console.log(rand([]))