//funciones tradicionales
function sumar(a:number, b:number):number{
    return a+b 
}

const suma:number = sumar(487,1111)

//funciones tradicionales
function mostrar(a:string):void{
    console.log(a)  
}

//console.log(suma)

//arrow function
const mostrar2 = (a:string):void=>{console.log(a)}

//mostrar('hola usuario, esta es un tipo de funcion, mas las tradicional....')
//mostrar2('hola usuario, este es un tipo de funcion mas nueva, llamada arrow function...')



//parametros opcionales
//la age? es el parametro opcional....

const optionals = (firstName:string, lastName:string, age?:number)=>{ 
    if(age){
        console.log(`mi nombre es ${firstName} ${lastName}, tengo ${age} a;os de edad`)
    }
    else{
        console.log(`mi nombre es ${firstName} ${lastName}`)
    }
}

//optionals('Carlos', 'Martinez', 37)

//parametros por defectos
//la edad sera la default
const byDefault = (firstName:string, lastName:string, age:number = 37)=>{ 
    
    console.log(`mi nombre es ${firstName} ${lastName}, tengo ${age} a;os de edad`)
}

//byDefault('Carlos', 'Martinez')
//byDefault('Mario', 'Castaneda')
//byDefault('Ursula', 'Landaeta', 40)

//parametros Rest
//la edad sera la default
const RestParameters = (postre:string, ...frutas:string[]):void=>{ 
    
    console.log(`Postre: ${postre} - Frutas: ${frutas}`)
}

RestParameters('postre1', 'naranja', 'lima')
RestParameters('postre2', 'manzana', 'canela')
RestParameters('postre3', 'fresa', 'chocolate', 'coco')