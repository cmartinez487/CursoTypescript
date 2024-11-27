"use strict";
/*

//importacion unica
//import { nombre } from "./moduloA";

//importacion multiple
//import {nombre, Person, Human, mostrar} from "./moduloA";

//import multiple no recomendada (pero util)
import * as moduloA from "./moduloA";

const humano:moduloA.Human = {nombre: 'Carlos'}

console.log(moduloA.nombre)

moduloA.mostrar('Hola Usuario!!!')

*/
Object.defineProperty(exports, "__esModule", { value: true });
var moduloA_1 = require("./moduloA");
var auto = new moduloA_1.default('Mazda 6', '2007', 5);
console.log(auto.marca);
auto.detalle();
