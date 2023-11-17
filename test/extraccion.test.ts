import { expect, test, describe } from "bun:test";
import { Compra } from "../src/compra";
import { Ticket } from "../src/ticket";

describe("Extracción de productos de la compra", () => {
  const casosDePrueba = [
    {
      name: "Compra simple con un producto",
      ticketPath: "data/20230918_mercadona_1_70.txt",
      productosEsperados: [
        {
          nombre: "+PROT NATILLA VAINI",
          cantidad: 1,
        },
      ],
      grasas: 7.2,
      hidratos: 27.84,
      proteinas: 48,
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
      grasas: 55.6,
      hidratos: 187.4,
      proteinas: 31.18,
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
      grasas: 140.5,
      hidratos: 364.6,
      proteinas: 52.1,
    },
   {
       name: "Compra completa con más productos y orden alterado",
       ticketPath: "data/20231111_mercadona_32_16.txt",
       productosEsperados: [
         {
           nombre: "COCA-COLA ZERO 2L",
           cantidad: 1,
         },
         {
           nombre: "ISOTÓNICO LIMÓN",
           cantidad: 1,
         },
         {
           nombre: "BOLSA PLASTICO",
           cantidad: 1,
         },
         {
           nombre: "MAYONESA 460ML",
           cantidad: 1,
         },
         {
           nombre: "PATATAS GAJO",
           cantidad: 1,
         },
         {
           nombre: "NATA PARA COCINAR",
           cantidad: 1,
         },
         {
           nombre: "PATATAS CAMPESTRES",
           cantidad: 1,
         },
         {
           nombre: "FOCACCIA PACK-2",
           cantidad: 1,
         },
         {
           nombre: "CAPRICHOS JAMÓN",
           cantidad: 1,
         },
         {
           nombre: "G. CABRA Y CEBOLLA",
           cantidad: 1,
         },
         {
           nombre: "RAVIOLI REQ.ESPINACA",
           cantidad: 1,
         },
         {
           nombre: "BIZCOCHO DE YOGUR",
           cantidad: 1,
         },
         {
           nombre: "COOKIES CHOCOLATE",
           cantidad: 1,
         },
         {
           nombre: "C. POLLO 100% NAT",
           cantidad: 1,
         },
         {
           nombre: "CAFÉ LECHE CAPPUCCIN",
           cantidad: 2,
         },
         {
           nombre: "PASTEL CREMA 65%",
           cantidad: 2,
         },
         {
           nombre: "TORTILLA PAT C/CEB",
           cantidad: 1,
         },
       ],
         grasas: 521.13,
         hidratos: 1251.64,
         proteinas: 224.9,
     },
   ];

  casosDePrueba.forEach((casoPrueba) => {
    test(casoPrueba.name, () => {
      const compra = new Compra(new Ticket(casoPrueba.ticketPath));
      const fechaCompra = compra.getFecha();
      const productosEnCompra = compra.getCompra();

      expect(fechaCompra).toBeInstanceOf(Date);
      expect(fechaCompra.getFullYear()).toBeGreaterThanOrEqual(2023);
      expect(productosEnCompra).toHaveLength(casoPrueba.productosEsperados.length);

      const macros: [number, number, number] = compra.getTotalMacroNutrientes();
      expect(macros[0]).toBe(casoPrueba.grasas);
      expect(macros[1]).toBe(casoPrueba.hidratos);
      expect(macros[2]).toBe(casoPrueba.proteinas);

      casoPrueba.productosEsperados.forEach((productoEsperado) => {
        const productoEncontrado = productosEnCompra.find(([producto, cantidad]) => {
          return producto.nombre === productoEsperado.nombre && cantidad === productoEsperado.cantidad;
        });

        expect(productoEncontrado).toBeDefined();
      });
    });
  });
});

