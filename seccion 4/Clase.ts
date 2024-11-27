class Vehiculo{
    marca:string
    fecha:string
    puertas:number

    constructor(_marca:string, _fecha:string, _puertas:number){
        this.marca = _marca
        this.puertas = _puertas
        this.fecha = _fecha
    }

    public acelerar(velocidad:number, aceleracion:number):void{

        console.log(`${this.marca} Aceleracion: ${aceleracion}, Velocidad del vehiculo: ${velocidad}`)

        this.frenar()
    }

    private frenar():void{
        console.log(`Frenando ${this.marca}...`)
    }

    public arrancar(){
        console.log(`${this.marca} Arrancando...`)
    }
}

const coche = new Vehiculo('Mazda 6', '01/01/2007', 4)

coche.arrancar()

coche.acelerar(120, 5)

//coche.frenar()