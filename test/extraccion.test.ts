import { expect, test, describe } from "bun:test";
import { Producto } from "../src/producto";
import { Compra } from "../src/compra";
import { Ticket } from "../src/ticket";

describe("Extracción de productos de la compra", () => {
  const casosDePrueba = [
    {
      name: "Compra simple con un producto",
      ticketPath: "data/20230925_mercadona_1_30.txt",
      productosEsperados: [
        {
          nombre: "EMPA, ATÚN 16%",
          cantidad: 1,
        },
      ],
    },
    {
      name: "Compra simple con dos productos, uno de ellos repetido",
      ticketPath: "data/20230914_mercadona_3_10.txt",
      productosEsperados: [
        {
          nombre: "ZUMO NARANJA REFRIG",
          cantidad: 1,
        },
        {
          nombre: "NAPOLITANA MIXTA",
          cantidad: 2,
        },
      ],
    },
    {
      name: "Compra simple con tres productos, uno de ellos repetido",
      ticketPath: "data/20230915_mercadona_5_55.txt",
      productosEsperados: [
        {
          nombre: "NACHOS",
          cantidad: 2,
        },
        {
          nombre: "PRINGLES ONION",
          cantidad: 1,
        },
        {
          nombre: "SALSA DE QUESO",
          cantidad: 1,
        },
      ],
    },
  ];

  for (const casoPrueba of casosDePrueba) {
    test(casoPrueba.name, () => {
      const compra = new Compra(new Ticket(casoPrueba.ticketPath));
      const fechaCompra = compra.getFecha();
      const productosEnCompra = compra.getCompra();

      expect(fechaCompra).toBeInstanceOf(Date);
      expect(fechaCompra.getFullYear()).toBeGreaterThanOrEqual(2023);
      expect(productosEnCompra).toHaveLength(casoPrueba.productosEsperados.length);

      for (let i = 0; i < casoPrueba.productosEsperados.length; i++) {
        const [producto, cantidad] = productosEnCompra[i];
        const expectedProduct = casoPrueba.productosEsperados[i];

        expect(producto).toBeInstanceOf(Producto);
        expect(producto.nombre).toEqual(expectedProduct.nombre);

        expect(cantidad).toBe(expectedProduct.cantidad);
      }
    });
  }
});

