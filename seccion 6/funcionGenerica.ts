//funcion basada en un tipo de dato
function mostrar(dato:string):string{
    return dato
}

//Funcion Generica, que puede manejar cualquier tipo de dato
function mostrarGenerica<T>(dato:T):T{
    return dato
}


console.log(mostrarGenerica(true))