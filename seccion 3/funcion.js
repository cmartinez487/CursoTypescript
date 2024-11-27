//funciones tradicionales
function sumar(a, b) {
    return a + b;
}
var suma = sumar(487, 1111);
//funciones tradicionales
function mostrar(a) {
    console.log(a);
}
//console.log(suma)
//arrow function
var mostrar2 = function (a) { console.log(a); };
//mostrar('hola usuario, esta es un tipo de funcion, mas las tradicional....')
//mostrar2('hola usuario, este es un tipo de funcion mas nueva, llamada arrow function...')
//parametros opcionales
//la age? es el parametro opcional....
var optionals = function (firstName, lastName, age) {
    if (age) {
        console.log("mi nombre es ".concat(firstName, " ").concat(lastName, ", tengo ").concat(age, " a;os de edad"));
    }
    else {
        console.log("mi nombre es ".concat(firstName, " ").concat(lastName));
    }
};
//optionals('Carlos', 'Martinez', 37)
//parametros por defectos
//la edad sera la default
var byDefault = function (firstName, lastName, age) {
    if (age === void 0) { age = 37; }
    console.log("mi nombre es ".concat(firstName, " ").concat(lastName, ", tengo ").concat(age, " a;os de edad"));
};
//byDefault('Carlos', 'Martinez')
//byDefault('Mario', 'Castaneda')
//byDefault('Ursula', 'Landaeta', 40)
//parametros Rest
//la edad sera la default
var RestParameters = function (postre) {
    var frutas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        frutas[_i - 1] = arguments[_i];
    }
    console.log("Postre: ".concat(postre, " - Frutas: ").concat(frutas));
};
RestParameters('postre1', 'naranja', 'lima');
RestParameters('postre2', 'manzana', 'canela');
RestParameters('postre3', 'fresa', 'chocolate', 'coco');
