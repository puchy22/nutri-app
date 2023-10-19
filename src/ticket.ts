import { Producto } from "./producto";

export class Compra{
    private _fechaCompra: Date;
    private _compra: [Producto,number][];

    constructor(fecha: Date){
        this._compra = [];
        this._fechaCompra = fecha
    }

    get compra(): [Producto,number][]{
        return this._compra;
    }

    get fechaCompra(): Date{
        return this._fechaCompra;
    }

    agregarProducto(producto: Producto,cantidad: number): void{
       //Incluir código
    }


    cantidadTotalProteinas(): number{
        //Incluir código
        return 0;
    }

    cantidadTotalCarbohidratos(): number{
        //Incluir código        
        return 0;
    }

    cantidadTotalGrasas(): number{
        //Incluir código
        return 0;
    }
}