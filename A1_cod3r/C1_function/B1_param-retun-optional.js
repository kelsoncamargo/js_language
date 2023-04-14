function area(widht, height){
    const area =  widht * height
    if(area > 20){
        console.log(`Valor acima do permitido ${area}m2.`)
    }else {
        return area
    }
}

console.log(area(4, 4))
console.log(area(2))
console.log(area())
console.log(area(5, 5))