function getIntRandomBetween(min, max){
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = 0

while(option != -1){
    option = getIntRandomBetween(-1, 10)
    console.log(option)
}

