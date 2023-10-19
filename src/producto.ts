export class Producto{
    private nombre: string;
    private carbohidratos: number;
    private proteinas: number;
    private grasas: number;

    constructor(nombre: string, carbohidratos: number, proteinas:number, grasas: number){
        this.nombre = nombre;
        this.carbohidratos = carbohidratos;
        this.proteinas = proteinas;
        this.grasas = grasas;
    }

    getNombre(): string{
        return this.nombre;
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