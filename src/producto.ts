export class Producto{
    readonly nombre: string;
    readonly grasas: number;
    readonly carbohidratos: number;
    readonly proteinas: number;

    constructor(nombre: string, grasas: number, carbohidratos: number, proteinas:number){
        this.nombre = nombre;
        this.grasas = grasas;
        this.carbohidratos = carbohidratos;
        this.proteinas = proteinas;
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
