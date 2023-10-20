"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
var Producto = /** @class */ (function () {
    function Producto(nombre, carbohidratos, proteinas, grasas) {
        this.nombre = nombre;
        this.carbohidratos = carbohidratos;
        this.proteinas = proteinas;
        this.grasas = grasas;
    }
    Producto.prototype.getCarbohidratos = function () {
        return this.carbohidratos;
    };
    Producto.prototype.getProteinas = function () {
        return this.proteinas;
    };
    Producto.prototype.getGrasas = function () {
        return this.grasas;
    };
    return Producto;
}());
exports.Producto = Producto;
