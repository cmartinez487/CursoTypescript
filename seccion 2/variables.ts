let user:string
let fname:string
let lname:string
let pilot:boolean
let age:number

//1era definicion
//let fullArray1: number[]
//let fullArray2: string[]

//2da definicion
let fullArray1: Array<number>
let fullArray2: Array<string>

//tupla
let tupla: [string, number, boolean]


user = 'Red Comet'
fname = 'Char'
lname = 'Aznable'
pilot = true
age = 30
fullArray1 = [1,2,3]
fullArray2 = [user, fname, lname]

tupla = [user,age, pilot]

console.log(tupla[2])