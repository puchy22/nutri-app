import { Producto } from "./producto";
import { Ticket } from "./ticket";

export class Compra{
   private fechaCompra: Date;
   private compra: [Producto,number][];

   constructor(ticket: Ticket){
      
      // Extraer toda la información del ticket
      let informacionTicket: string|null = ticket.getContenido();

      if (informacionTicket){

         // Extraer la fecha de compra
      
         const fechaCompra: RegExpMatchArray|null = informacionTicket.match(/\s*(\d{2})\/(\d{2})\/(\d{4})\s*/);

         if (fechaCompra){

            const [_, dia, mes, anio] = fechaCompra;
            this.fechaCompra = new Date(parseInt(anio), parseInt(mes) - 1, parseInt(dia));
         }
         else{
            this.fechaCompra = new Date();
         }

         // Extraer los productos de la compra
         
         this.compra = [];

         // Separar todo el texto en las distintas líneas

         const lineas: string[] = informacionTicket.split("\n");

         // Buscar la palabra "Factura Simplificada" y "Descripción" para saber a partir de qué línea se encuentran las cantidades y le nombre de los productos

         const indiceFactura: number = lineas.findIndex(linea => linea.includes("FACTURA SIMPLIFICADA"));

         const indiceDescripcion: number = lineas.findIndex(linea => linea.includes("Descripción"));

         for (let indiceNombreProducto = indiceDescripcion + 1, indiceCantidadProducto = indiceFactura + 2;
               indiceNombreProducto < lineas.length && lineas[indiceNombreProducto] != "";
               indiceNombreProducto++, indiceCantidadProducto++){
         
            // Extraer el nombre del producto (línea completa) y meterlo en el array de los nombres de los productos

            const nombreProducto: string = lineas[indiceNombreProducto];

            const cantidad: number = parseInt(lineas[indiceCantidadProducto]);

            this.compra.push([new Producto(nombreProducto, 0, 0, 0), cantidad]);

         }

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

}
