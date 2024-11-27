interface Persona{
    altura:number
    peso:number
    nombre?:string //opcional...
    readonly alias:string
}

let persona:Persona = {altura:1.70, peso:105, alias: 'Joe Doe'}

function calculoImc(persona:Persona):string{
    let media: number = persona.peso / (persona.altura ** 2);

    if(persona.nombre){
        return `${persona.nombre} tiene un Imc de: $${media.toFixed(2)}`
    }else{
        return `${persona.alias} tiene un Imc de:  $${media.toFixed(2)}`
    }
}

console.log(calculoImc(persona))