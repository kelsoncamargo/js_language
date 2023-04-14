function getIntRandomBetween(min, max){
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = -1

do{
    option = getIntRandomBetween(-1, 10)
    console.log(option)
}while(option != -1)

