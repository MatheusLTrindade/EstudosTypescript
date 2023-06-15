// Opção 1
function sendSpaceship(sendSpaceship:{ pilot: string, copilot?: string}) {
    // ...
}
sendSpaceship({ pilot: 'Han Solo', copilot: 'Chewbacca' })
sendSpaceship({ pilot: 'Luke' })



// Opção 2
let option2: unknown
option2 = 'Test'
option2 = 20
option2 = []

let text: string = 'Olá'
// text = option2       // TS não aceita
option2 = text          // TS aceita



// Opção 3
let option3: any
option3 = 'Test'
option3 = 20
option3 = []

let hello: string = 'Olá Mundo'
hello = option3         // TS aceita
option3 = hello         // TS aceita