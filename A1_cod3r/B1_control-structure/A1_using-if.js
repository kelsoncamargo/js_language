function onlyGoodGrade(note){
    if(note >= 7){
        console.log(`Aprovado ${note}`)
    }
}

onlyGoodGrade(8.1)
onlyGoodGrade(6.1)

function ifTrueISpeak(value){
    if(value){
        console.log(`É verdade... ${value}`)
    }
}

ifTrueISpeak()
ifTrueISpeak(null)
ifTrueISpeak(undefined)
ifTrueISpeak(NaN)
ifTrueISpeak('')
ifTrueISpeak(0)
ifTrueISpeak(-1)
ifTrueISpeak(' ')
ifTrueISpeak('?')
ifTrueISpeak([])
ifTrueISpeak([1, 2])
ifTrueISpeak({})