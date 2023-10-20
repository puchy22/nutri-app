export class Producto{
    readonly nombre: string;
    readonly carbohidratos: number;
    readonly proteinas: number;
    readonly grasas: number;

    constructor(nombre: string, carbohidratos: number, proteinas:number, grasas: number){
        this.nombre = nombre;
        this.carbohidratos = carbohidratos;
        this.proteinas = proteinas;
        this.grasas = grasas;
    }

    getCarbohidratos(): number{
        return this.carbohidratos;
    }

    getProteinas(): number{
        return this.proteinas;
    }

    getGrasas(): number{
        return this.grasas;
    }
}