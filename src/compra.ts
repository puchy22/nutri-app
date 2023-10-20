import { Producto } from "./producto";

export class Compra{
    readonly fechaCompra: Date;
    readonly compra: [Producto,number][];

    constructor(fecha: Date, infoProductos: [Producto,number][]){
        this.compra = infoProductos;
        this.fechaCompra = fecha
    }

    getCompra(): [Producto,number][]{
        return this.compra;
    }

    getFecha(): Date{
        return this.fechaCompra;
    }
}