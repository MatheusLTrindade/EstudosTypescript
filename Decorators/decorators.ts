function Decorator() {
    return function(target, key, descriptor) {
        descriptor.value= function(value: number) {
            console.log(`Calculando ${value} elevado ao quadrado`)
            return value ** 2
        }
    }
}

class Example {
    name: string

    constructor(name:string) {
        this.name = name
    }

    @Decorator()
    calculate(value: number) {
        // ...
        console.log(`Calculando ${value} vezes 2`)
        return value * 2
    }
}

const example = new Example('Olá Mundo!')

const resultExample = example.calculate(5)

console.log(`Resultado: ${resultExample}`)