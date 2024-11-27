class VehiculoGen<T>{
    marca:string
    fecha:T
    puertas:number

    constructor(_marca:string, _fecha:T, _puertas:number){
        this.marca = _marca
        this.puertas = _puertas
        this.fecha = _fecha
    }

    public acelerar(velocidad:number, aceleracion:number):void{

        console.log(`${this.marca} - ${this.fecha}: Aceleracion: ${aceleracion}, Velocidad del vehiculo: ${velocidad}`)

        this.frenar()
    }

    public frenar():void{
        console.log(`Frenando ${this.marca}...`)
    }

    public arrancar(){
        console.log(`${this.marca} Arrancando...`)
    }
}

const auto = new VehiculoGen('Mazda 6', '2007', 4)

auto.arrancar()

auto.acelerar(120, 5)

//auto.frenar()