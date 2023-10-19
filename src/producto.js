"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
var Producto = /** @class */ (function () {
    function Producto(nombre, carbohidratos, proteinas, grasas) {
        this._nombre = nombre;
        this._carbohidratos = carbohidratos;
        this._proteinas = proteinas;
        this._grasas = grasas;
    }
    Object.defineProperty(Producto.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Producto.prototype, "carbohidratos", {
        get: function () {
            return this._carbohidratos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Producto.prototype, "proteinas", {
        get: function () {
            return this._proteinas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Producto.prototype, "grasas", {
        get: function () {
            return this._grasas;
        },
        enumerable: false,
        configurable: true
    });
    return Producto;
}());
exports.Producto = Producto;
