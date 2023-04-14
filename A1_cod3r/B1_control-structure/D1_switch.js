const printResult = function (note){
    switch(Math.floor(note)){
        case 10: case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota: '+ note +' inválida!')
    }
}

printResult(10)
printResult(8.9)
printResult(6.55)
printResult(2.3)
printResult(-1)
printResult(11)