function test1(num){
    if(num > 7)
        console.log(num)
    console.log('Final')
    
}
test1(6)
test1(8)

function test2(num){
    if(num > 7);  // Be careful with the ';', don't use it with control structures.
    
    {
        console.log(num)
    }
}

test2(6)
test2(8)

function test3(num){
    if(num > 7){
        console.log(num)
    }
}

test3(6)
test3(8)