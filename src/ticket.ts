import * as fs from 'fs';

export class Ticket {
  private ruta: string;
  private contenido: string | null = null;

  constructor(ruta: string) {
    this.ruta = ruta;
  }

  private leerDesdeArchivo(): void {
      try {
         this.contenido = fs.readFileSync(this.ruta, 'utf8');
      } catch (error) {
         console.error(`Error al leer el archivo: ${error}`);
      }
  }

  public getContenido(): string | null {
    if (!this.contenido) {
      this.leerDesdeArchivo();
    }

    return this.contenido;
  }
}

