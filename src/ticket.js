"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compra = void 0;
var Compra = /** @class */ (function () {
    function Compra(fecha) {
        this._compra = [];
        this._fechaCompra = fecha;
    }
    Object.defineProperty(Compra.prototype, "compra", {
        get: function () {
            return this._compra;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Compra.prototype, "fechaCompra", {
        get: function () {
            return this._fechaCompra;
        },
        enumerable: false,
        configurable: true
    });
    //Método para incluir un producto junto con su cantidad en el vector compra
    Compra.prototype.agregarProducto = function (producto, cantidad) {
        //Incluir código
    };
    //Método para obtener la cantidad total de Proteinas
    Compra.prototype.cantidadTotalProteinas = function () {
        //Incluir código
        return 0;
    };
    //Método para obtener la cantidad total de Carbohidratos
    Compra.prototype.cantidadTotalCarbohidratos = function () {
        //Incluir código        
        return 0;
    };
    //Método para obtener la cantidad total de Grasas
    Compra.prototype.cantidadTotalGrasas = function () {
        //Incluir código
        return 0;
    };
    return Compra;
}());
exports.Compra = Compra;
