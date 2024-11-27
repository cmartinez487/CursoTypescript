interface PersonaGen<T>{
    altura:number
    peso:number
    nombre?:T //opcional...
    readonly alias:string
}

let personaGen1:PersonaGen<string> = {altura:1.70, peso:105, nombre:'John', alias: 'Joe Doe'}
let personaGen2:PersonaGen<number> = {altura:1.70, peso:105, nombre:117, alias: 'Joe Doe'}

function calculoImcGen1(persona:PersonaGen<string>):string{
    let media: number = persona.peso / (persona.altura ** 2);

    if(persona.nombre){
        return `${persona.nombre} tiene un Imc de: $${media.toFixed(2)}`
    }else{
        return `${persona.alias} tiene un Imc de:  $${media.toFixed(2)}`
    }
}

function calculoImcGen2(persona:PersonaGen<number>):string{
    let media: number = persona.peso / (persona.altura ** 2);

    if(persona.nombre){
        return `${persona.nombre} tiene un Imc de: $${media.toFixed(2)}`
    }else{
        return `${persona.alias} tiene un Imc de:  $${media.toFixed(2)}`
    }
}

console.log(calculoImcGen2(personaGen2))