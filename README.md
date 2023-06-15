# <img src="https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png" height="40px" align="center" /> Typescript

## Descrição

O TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. Ela é uma versão fortemente tipada e superset da linguagem JavaScript, o que significa que qualquer código JavaScript válido também é válido em TypeScript. No entanto, o TypeScript adiciona recursos adicionais que ajudam os desenvolvedores a escrever um código mais seguro, robusto e escalável.
<br>

## Características Principais

- **Tipagem Estática**: O TypeScript introduz a tipagem estática, permitindo que os desenvolvedores definam os tipos das variáveis, parâmetros e retornos de função. Isso ajuda a identificar erros durante a fase de desenvolvimento, antes mesmo de executar o código, e oferece recursos de autocompletar e verificação de tipo durante o desenvolvimento.

- **Orientação a Objetos**: O TypeScript suporta os conceitos de orientação a objetos, incluindo classes, interfaces, herança, polimorfismo e encapsulamento. Isso permite que os desenvolvedores estruturem seu código de maneira mais organizada e reutilizável.

- **Compilação**: O TypeScript é compilado para JavaScript antes de ser executado no navegador ou em qualquer ambiente JavaScript. A compilação permite que o código TypeScript seja executado em qualquer navegador ou mecanismo JavaScript, independentemente do suporte nativo ao TypeScript.

- **ECMAScript**: O TypeScript é compatível com as últimas especificações do ECMAScript (padrão JavaScript), o que significa que os desenvolvedores podem usar recursos avançados do JavaScript moderno, como arrow functions, promessas, módulos e muito mais.

- **Ferramentas e Ecossistema**: O TypeScript é amplamente suportado por uma variedade de ferramentas de desenvolvimento, como editores de código, IDEs e frameworks populares, como o Angular, React e Node.js. Além disso, existem muitas bibliotecas e pacotes disponíveis especificamente para o TypeScript, que podem ser facilmente integrados aos projetos.
<br>

## Como Usar

Para começar a usar o TypeScript em seu projeto, siga estas etapas:

1. Instale o compilador TypeScript globalmente através do npm (Node Package Manager) usando o seguinte comando:

```node
npm install -g typescript
```

2. Crie um arquivo chamado `script.ts` e escreva seu código TypeScript nele.

3. Compile o arquivo TypeScript para JavaScript usando o seguinte comando:

```node
tsc script.ts
```

Isso irá gerar um arquivo `script.js` que contém o código JavaScript equivalente.

4. Agora você pode executar o código JavaScript gerado usando o Node.js ou incorporá-lo em seu aplicativo da web.
<br>

## Exemplo de Código

Aqui está um exemplo básico de um programa TypeScript que exibe uma mensagem no console:

```typescript
// Definindo o tipo da variável
let message: string = "Olá, TypeScript!";

// Função que exibe a mensagem no console
function showMessage(msg: string): void {
    console.log(msg);
}

// Chamando a função
showMessage(message);
```

Neste exemplo, definimos uma variável `message` com o tipo `string` e uma função `showMessage` que recebe um parâmetro `msg` do tipo `string`. Ao chamar a função `showMessage` com a variável `message`, a mensagem é exibida no console.
<br>

## Conclusão

O TypeScript é uma linguagem poderosa que adiciona recursos de tipagem estática ao JavaScript, ajudando os desenvolvedores a criar código mais seguro e escalável. Com sua sintaxe familiar, suporte a orientação a objetos e integração com ferramentas e frameworks populares, o TypeScript é uma escolha popular para projetos JavaScript de todos os tamanhos.

Para mais informações e documentação oficial, você pode visitar o [site oficial do TypeScript](https://www.typescriptlang.org/).