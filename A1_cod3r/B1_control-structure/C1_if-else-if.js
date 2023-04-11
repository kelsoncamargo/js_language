Number.prototype.between = function(start, end){
    return this >= start && this <= end
}

const prinResult = function(note){
    if(note.between(9, 10)){
        console.log('Quadro de Honra')
    } else if(note.between(7, 8.99)){
        console.log('Aprovado')
    } else if(note.between(4, 6.99)){
        console.log('Recuperação')
    } else if(note.between(0, 3.99)){
        console.log('Reprovado')
    } else{
        console.log('Nota inválida')
    }
}

prinResult(10)
prinResult(8.9)
prinResult(6.55)
prinResult(2.3)
prinResult(-1)
prinResult(11)