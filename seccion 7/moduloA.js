"use strict";
/*
export const nombre:string = 'Carlos'

export class Person{
    nombre:string
}

export interface Human{
    nombre:string
}

export const mostrar = (dato:string):void =>{
    console.log(dato)
}
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Auto = /** @class */ (function () {
    function Auto(_marca, _fecha, _puertas) {
        this.marca = _marca;
        this.puertas = _puertas;
        this.fecha = _fecha;
    }
    Auto.prototype.detalle = function () {
        console.log("".concat(this.marca));
    };
    return Auto;
}());
exports.default = Auto;
