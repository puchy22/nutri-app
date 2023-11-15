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
         
      const lineas: string[] = informacionTicket.split("\n");

      const indiceFactura: number = lineas.findIndex(linea => linea.includes("FACTURA SIMPLIFICADA"));

      const indiceDescripcion: number = lineas.findIndex(linea => linea.includes("Descripción"));

      let productos: [Producto,number][] = [];

      for (let indiceNombreProducto = indiceDescripcion + 1, indiceCantidadProducto = indiceFactura + 2;
      indiceNombreProducto < lineas.length && lineas[indiceNombreProducto] != "";
      indiceNombreProducto++, indiceCantidadProducto++){

         const nombreProducto: string = lineas[indiceNombreProducto];

         const cantidad: number = parseInt(lineas[indiceCantidadProducto]);

         productos.push([new Producto(nombreProducto, 0, 0, 0), cantidad]);
      }

      return productos;
   }
}
