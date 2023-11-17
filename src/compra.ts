import { Producto } from "./producto";
import { Ticket } from "./ticket";
import * as fs from "fs";

export class Compra{
   private fechaCompra: Date;
   private compra: [Producto,number][];

   constructor(ticket: Ticket){
      
      let informacionTicket: string|null = ticket.getContenido();

      if (informacionTicket){
         this.fechaCompra = this.extraerFechaCompraDeTicket(informacionTicket);
         this.compra = this.extraerProductosDeTicket(informacionTicket);
      }
      else{
         this.fechaCompra = new Date();
         this.compra = [];
      }

   }

   getCompra(): [Producto,number][]{
      return this.compra;
   }

   getFecha(): Date{
      return this.fechaCompra;
   }

   private extraerFechaCompraDeTicket(informacionTicket: string): Date {
      
      const expresionFechaCompra: RegExpMatchArray|null = informacionTicket.match(/\s*(\d{2})\/(\d{2})\/(\d{4})\s*/);

      if (expresionFechaCompra){
         const [_, dia, mes, anio] = expresionFechaCompra;
         return new Date(parseInt(anio), parseInt(mes) - 1, parseInt(dia));
      }
      else{
         return new Date();
      }
   }

   private extraerProductosDeTicket(informacionTicket: string): [Producto,number][] {
         
      const expresionCantidadProductos: RegExpMatchArray|null = informacionTicket.match(/(?<=FACTURA SIMPLIFICADA:[^\n]*\n\n)([\s\S]*?)(?=\n\nDescripción)/g);

      const expresionProductos: RegExpMatchArray|null = informacionTicket.match(/(?<=Descripción\s*\n)[\s\S]*?(?=\r?\n\s*\r?\n|\r?\n\s*$)/);

      if (expresionCantidadProductos && expresionProductos){
         const cantidadProductos: number[] = expresionCantidadProductos[0].split("\n").map(cantidad => parseInt(cantidad));

         const productos: Producto[] = expresionProductos[0].split("\n").map(producto => {
            const macroNutrientes: [number,number,number] = this.extraerMacroNutrientesTotalesProducto(producto);
            return new Producto(producto, macroNutrientes[0], macroNutrientes[1], macroNutrientes[2]);
         } );

         return productos.map((producto, indice) => [producto, cantidadProductos[indice]]);
      }
      else{
         return [];
      }
   }

   private extraerMacroNutrientesTotalesProducto(nombreProducto: string): [number,number,number]{
      const productos: Producto[] = JSON.parse(fs.readFileSync("data/productos_mercadona.json", "utf-8"));

      const producto: Producto|undefined = productos.find(producto => producto.nombre === nombreProducto);

      if (producto){
         return [producto.grasas, producto.carbohidratos, producto.proteinas];
      }
      else{
         return [0,0,0];
      }
   }

}
