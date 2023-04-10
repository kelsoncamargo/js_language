function handleErrorThrow(erro){
    // throw new Error('Aconteceu algum problema ')
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function printScreadmedName(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){
        handleErrorThrow(e)
    }
}

const obj = {name: 'Roberto'}
printScreadmedName(obj)