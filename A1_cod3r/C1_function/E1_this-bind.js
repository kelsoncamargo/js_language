const person = {
    salutation: 'Bom dia!',
    speak(){
        console.log(this.salutation)
    }
}

person.speak()
const speak = person.speak
speak() // Conflict between paragigms: functional an OO

const speakPerson = person.speak.bind(person)
speakPerson()