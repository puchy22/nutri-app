import { Producto } from "./producto";
import { Ticket } from "./ticket";

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
         const productos: Producto[] = expresionProductos[0].split("\n").map(producto => new Producto(producto, 0, 0, 0));

         return productos.map((producto, indice) => [producto, cantidadProductos[indice]]);
      }
      else{
         return [];
      }

   }
}
