const notes = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let note in notes){
    console.log(`nota ${notes[note]}`)
}

const person = {
    youName: 'Ana',
    LastName: 'Silva',
    age: 29,
    weight: 64
}

for(let attribute in person){
    console.log(attribute, person[attribute])
}