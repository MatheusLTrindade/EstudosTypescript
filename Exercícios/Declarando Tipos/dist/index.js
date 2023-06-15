const spaceships = [];
function addSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(spaceship);
    alert(`A nave ${spaceship.name} foi registrada.`);
}
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceships.find(ship => ship.name === name);
    return spaceship;
}
function addCrewMember(member, spaceship) {
    if (spaceship.crew.length === spaceship.crewLimit) {
        alert(`${member} não pode ser adicionado. Limite atingido.`);
    }
    else {
        spaceship.crew.push(member);
        alert(`${member} foi adicionado a tripulação da ${spaceship.name}`);
    }
}
function sendMission(spaceship) {
    if (spaceship.inMission) {
        alert(`${spaceship.name} não pode ser enviada. Nave já está em missão!`);
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        const difference = Math.floor(spaceship.crewLimit / 3) - spaceship.crew.length;
        if (difference > 1)
            alert(`${spaceship.name} não pode ser enviada para missão.\nFaltando ${difference} tripulantes para a capacidade mínima.`);
        else
            alert(`${spaceship.name} não pode ser enviada para missão.\nFalta ${difference} tripulante para a capacidade mínima.`);
    }
    else {
        spaceship.inMission = true;
        alert(`${spaceship.name} sendo enviada para missão...`);
        alert(`${spaceship.name} enviada para missão!`);
    }
}
function firstMenuOption() {
    const name = prompt('Qual é o nome da nave a ser registrada?');
    const pilot = prompt(`Qual é o nome do piloto da ${name}?`);
    const crewLimit = Number(prompt(`Quantos tripulantes a ${name} suporta?`));
    const confirmation = confirm(`
        Confirma o registro da nave ${name}
        Piloto: ${pilot}
        Limite de tripulação: ${crewLimit}
    `);
    if (confirmation)
        addSpaceship(name, pilot, crewLimit);
    else
        alert(`Registro da ${name} cancelado!`);
}
function secondMenuOption() {
    const member = prompt('Qual é o nome do tripulante?');
    const spaceshipName = prompt(`Para qual nave ${member} deverá ser designado?`);
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Confirma a inclusão de ${member} na tripulação da ${spaceshipName}`);
        if (confirmation)
            addCrewMember(member, spaceship);
        else
            alert(`Inclusão de ${member} cancelada!`);
    }
    else {
        alert(`Não há registro da ${spaceshipName}.\nInclusão cancelada!`);
    }
}
function thirdMenuOption() {
    const spaceshipName = prompt('Qual é o nome da nave a ser enviada?');
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Confirma o envio da ${spaceshipName} na missão?`);
        if (confirmation)
            sendMission(spaceship);
        else
            alert(`Envio da ${spaceshipName} para missão cancelado!`);
    }
    else {
        alert(`Não há registro da ${spaceshipName}.\nMissão cancelada!`);
    }
}
function fourthMenuOption() {
    let list = 'Naves Registradas:\n';
    spaceships.forEach((spaceship) => {
        list += `
            Nave: ${spaceship.name}
            Piloto: ${spaceship.pilot}
            Em missão? ${spaceship.inMission ? 'Sim' : 'Não'}
            Limite de tripulação: ${spaceship.crewLimit}
            Tripulantes: ${spaceship.crew.length}
        `;
        spaceship.crew.forEach(member => {
            list += `   - ${member}\n`;
        });
    });
    alert(list);
}
let userOption = 0;
while (userOption !== 5) {
    const menu = `
        Painel Principal\n
        1 - Registrar uma nova nave
        2 - Adicionar membro da tripulação
        3 - Enviar nave em missão
        4 - Listar naves registradas
        5 - Encerrar
    `;
    userOption = Number.parseInt(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            alert('Encerrando o sistema...');
            break;
        default:
            alert('Opção inválida!\nRetornando ao painel principal...');
            break;
    }
}
