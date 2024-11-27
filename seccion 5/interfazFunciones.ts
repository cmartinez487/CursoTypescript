interface General{
    (nombre:string, apellido:string, edad:number):void
}

let General1:General

General1 = function(nombre:string, apellido:string, edad:number):void{

    console.log(`${nombre}, ${apellido}, ${edad}`)

}
General1('Carlos','Rafael',37)