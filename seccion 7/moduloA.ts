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

class Auto{
    marca:string
    fecha:string
    puertas:number

    constructor(_marca:string, _fecha:string, _puertas:number){
        this.marca = _marca
        this.puertas = _puertas
        this.fecha = _fecha
    }

    public detalle():void{

        console.log(`${this.marca}`)
    }
}

export default Auto