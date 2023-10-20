import { Producto } from "./producto";

export class Compra{
    readonly _fechaCompra: Date;
    readonly _compra: [Producto,number][];

    constructor(fecha: Date, infoProductos: [Producto,number][]){
        this._compra = infoProductos;
        this._fechaCompra = fecha
    }
}