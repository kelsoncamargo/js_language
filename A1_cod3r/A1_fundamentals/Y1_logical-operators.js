function shop( work1, work2){
    const shopIceCream = work1 || work2
    const shopTv50 = work1 && work2
    // const shopTv32 = !!(work1 ^ work2) // or exclusive
    const shopTv32 = work1 != work2
    const keepHealthy = !shopIceCream

    return {shopIceCream, shopTv50, shopTv32, keepHealthy}
}

console.log(shop(true, true))
console.log(shop(false, true))
console.log(shop(true, false))
console.log(shop(false, false))