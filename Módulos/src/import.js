"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash = require("lodash");
let xwing = {
    name: 'X-wing',
    pilot: 'Luke Skywalker',
    speed: 50,
    weapons: 4
};
xwing.name = "";
console.log(lodash.camelCase(xwing.pilot));
console.log(lodash.kebabCase(xwing.pilot));
