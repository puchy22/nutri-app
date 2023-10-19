export class Producto{
    private _nombre: string;
    private _carbohidratos: number;
    private _proteinas: number;
    private _grasas: number;

    constructor(nombre: string, carbohidratos: number, proteinas:number, grasas: number){
        this._nombre = nombre;
        this._carbohidratos = carbohidratos;
        this._proteinas = proteinas;
        this._grasas = grasas;
    }

    get nombre(): string{
        return this._nombre;
    }

    get carbohidratos(): number{
        return this._carbohidratos;
    }

    get proteinas(): number{
        return this._proteinas;
    }

    get grasas(): number{
        return this._grasas;
    }
}