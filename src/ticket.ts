import { Producto } from "./producto";

export class Ticket{
    private _compra: [Producto,number][];

    constructor(){
        this._compra = [];
    }

    get compra(): [Producto,number][]{
        return this._compra;
    }

    //Método para incluir un producto junto con su cantidad en el vector compra
    agregarProducto(producto: Producto,cantidad: number): void{
       //Incluir código
    }


    //Método para obtener la cantidad total de Proteinas
    cantidadTotalProteinas(): number{
        //Incluir código
        return 0;
    }

    //Método para obtener la cantidad total de Carbohidratos
    cantidadTotalCarbohidratos(): number{
        //Incluir código        
        return 0;
    }

    //Método para obtener la cantidad total de Grasas
    cantidadTotalGrasas(): number{
        //Incluir código
        return 0;
    }
}