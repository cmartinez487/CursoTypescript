class Padre{
    protected name:string
    age:number

    constructor(_name:string, _age:number)
    {
        this.name = _name
        this.age = _age
    }

    protected mostrarNombre(){
        console.log(this.name)
    }
}

class Hijo extends Padre{

    lastName:string

    constructor(_name:string, _age:number, _lastName:string){

        super(_name, _age)
        this.lastName = _lastName
    }

    public mostrarNombreHijo(){
        this.mostrarNombre()
        console.log(`${this.lastName}`)
    }
}

const nHijo = new Hijo('Juanjo',2,'Martinez')

//nHijo.mostrarNombre()
nHijo.mostrarNombreHijo()