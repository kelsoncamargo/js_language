const nameR = "Rebeca"
const contact = "Olá " + nameR + "!"
const templateString = `
    Olá
    ${nameR}!
`

console.log(contact)
console.log(templateString)

// expresions
console.log(`1 + 1 = ${1 + 1}`)

const up = s => s.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)