const notes = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// no callback
let lowNotes = []

for(let i in notes){
    if(notes[i] < 7){
        lowNotes.push(notes[i])
    }
}

console.log(lowNotes)

// with callbac
lowNotes = notes.filter(note => note < 7)
console.log(lowNotes)
