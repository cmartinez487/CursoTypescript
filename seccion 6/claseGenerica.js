var VehiculoGen = /** @class */ (function () {
    function VehiculoGen(_marca, _fecha, _puertas) {
        this.marca = _marca;
        this.puertas = _puertas;
        this.fecha = _fecha;
    }
    VehiculoGen.prototype.acelerar = function (velocidad, aceleracion) {
        console.log("".concat(this.marca, " - ").concat(this.fecha, ": Aceleracion: ").concat(aceleracion, ", Velocidad del vehiculo: ").concat(velocidad));
        this.frenar();
    };
    VehiculoGen.prototype.frenar = function () {
        console.log("Frenando ".concat(this.marca, "..."));
    };
    VehiculoGen.prototype.arrancar = function () {
        console.log("".concat(this.marca, " Arrancando..."));
    };
    return VehiculoGen;
}());
var auto = new VehiculoGen('Mazda 6', '2007', 4);
auto.arrancar();
auto.acelerar(120, 5);
//auto.frenar()
