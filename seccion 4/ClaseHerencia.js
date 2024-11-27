var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Padre = /** @class */ (function () {
    function Padre(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    Padre.prototype.mostrarNombre = function () {
        console.log(this.name);
    };
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo(_name, _age, _lastName) {
        var _this = _super.call(this, _name, _age) || this;
        _this.lastName = _lastName;
        return _this;
    }
    Hijo.prototype.mostrarNombreHijo = function () {
        this.mostrarNombre();
        console.log("".concat(this.lastName));
    };
    return Hijo;
}(Padre));
var nHijo = new Hijo('Juanjo', 2, 'Martinez');
//nHijo.mostrarNombre()
nHijo.mostrarNombreHijo();
