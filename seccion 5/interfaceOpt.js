var persona = { altura: 1.70, peso: 105, alias: 'Joe Doe' };
function calculoImc(persona) {
    var media = persona.peso / (Math.pow(persona.altura, 2));
    if (persona.nombre) {
        return "".concat(persona.nombre, " tiene un Imc de: $").concat(media.toFixed(2));
    }
    else {
        return "".concat(persona.alias, " tiene un Imc de:  $").concat(media.toFixed(2));
    }
}
console.log(calculoImc(persona));
