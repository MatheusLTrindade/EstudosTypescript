let literal: 'Hello, World!'
let pi: 3.14159



let option: "Yes" | "No"
option = "Yes"

let example: number | boolean
example = 2
example = false



type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"

let planet: Planet

let homePlanet: Planet

function checkPlanet(planet: Planet) {
    if (planet === "Terra") {
        console.log("Estamos na Terra")
    }
}

type GreetingCallback = (name: string) => void

function greet(callbackfn: GreetingCallback) {
    let name = 'Matheus'
    
    callbackfn(name)
}