
# Imagen base para un contenedor de pruebas

## Criterios

- **Versión actualizada**: la imagen debe estar actualizada. Ya que si no está
    actualizada, puede contener fallos de seguridad o no tener las últimas
    versiones de los paquetes instalados.
- **Ejecución rápida**: la imagen debe ser rápida a la hora de ejecutarse,
    para que los tests se ejecuten lo más rápido posible y aprovechar al máximo
    una de las principales características de Bun.
- **Mantenimiento activo**: la imagen debe tener un mantenimiento activo, para
  que se actualice con frecuencia y se corrijan los fallos que puedan surgir.

## Opciones

Podemos considerar dos tipos de imagenes a usar como base:

- **Imágen de una distribución de Linux**: Podemos usar una imagen de una
  distribución de Linux, como por ejemplo Alpine, Debian, SUSE, Rocky etc. Estas
  imágenes son muy versátiles, y nos permiten instalar cualquier software que
  necesitemos. La desventaje es que tendremos que instalar todo el software
  necesario para ejecutar nuestros test.
- **Imágen oficial de Bun**: Esta imagen ya tiene instalado todo el software
  necesario para ejecutar nuestros test, por lo que no tenemos que instalar
  nada. La desventaja es que perdemos el control de instalación de software,
  lo que puede resultarnos en una imagen poco ligera y con software innecesario,
  que puede consumir recursos de más.

**NOTA**: en el caso de las imagenes de tercero con Bun, no han sido tenidas en
cuenta por haber muy pocas opciones, no ser muy populares y con un mantenimiento
dudoso al tratarse Bun de un proyecto muy nuevo.

### Imagen de una distribución de Linux

- **[Alpine](https://hub.docker.com/_/alpine)**: Es una distribución de Linux muy ligera, y con un consumo de
  recursos muy bajo. Es una buena opción para usar como base de nuestros
  contenedores de pruebas. La mayor desventaja es que no es tan popular como otras
  distribuciones en sí, pero la imagen del contenedor justamente es muy popular,
  lo que la hace una muy buena opción.
- **[Debian](https://hub.docker.com/_/debian)**: Es una distribución de Linux muy popular, y con un consumo de
  recursos bajo. Es una buena opción para usar como base de nuestros
  contenedores de pruebas. La desventaja es que no es tan ligera como Alpine,
  por lo que el tiempo de construcción de los contenedores será mayor.
- **[SUSE](https://registry.suse.com/)**: Es una distribución de Linux muy popular en el mundo de los servidores,
  y con un consumo de recursos bajo. Es una buena opción para usar como base 
  de nuestros contenedores de pruebas. La desventaja es que no es ni tan ligera 
  como Alpine, ni tan popular como Debian, por lo que es una opción intermedia.
  Un dato interesante es que SUSE no almacena sus imágenes en Docker Hub, sino 
  en su propio repositorio, dando muchas más opciones de imágenes que las que
  se suelen encontrar en Docker Hub; además de recomendar el uso de `podman`
  que en mi caso es lo idóneo ya que es el que uso en mi equipo.
- **[Rocky](https://hub.docker.com/_ /rockylinux)**: Para muchos el sucesor de CentOS desde las decisiones tomadas
  por Red Hat sobre el futuro desarrollo de CentOS. Es una distribución que
  tiene como objetivo ser compatible con RHEL, por lo que es una buena opción
  para usar como base de nuestros contenedores de pruebas. La desventaja es
  que no es tan ligera como Alpine, ni la compatibilidad con RHEL es aún
  completa del toda por lo que eso puede ser un problema en cuanto a la instalación
  del software necesario para ejecutar los tests.

### Imagen oficial de [Bun](https://hub.docker.com/r/oven/bun)

En el caso de la imagen oficial de Bun, a parte de lo indicado en la descripción
al inicio de este documento, hay que tener en cuenta que existen distintos sabores
de la imagen, cada uno con un conjunto de software instalado. Por lo que hay que
elegir el sabor que más se ajuste a nuestras necesidades. Estas son

- `[debian](https://github.com/oven-sh/bun/blob/main/dockerhub/debian/Dockerfile)`: usa como base
    la imagen Debian bullseye, que es la versión anterior a la actual versión de Debian.
    Esta hace de ella una versión estable, pero el mayor problema de esta imagen es que es
    más pesada que imagenes como alpine o versiones slim de otras distribuciones.
- `[alpine](https://github.com/oven-sh/bun/blob/main/dockerhub/alpine/Dockerfile)`: usa como base
    la imagen Alpine 3.18, que es la versión actual versión de Alpine. Esta hace de ella una versión
    estable, pero el mayor problema de esta imagen es que como se puede ver en la fuente de la imagen,
    usa una solución temporal para la biblioteca glibc; por lo que no parece una buena opción por el
    momento.
- `[slim](https://github.com/oven-sh/bun/blob/main/dockerhub/debian-slim/Dockerfile)`: usa como base
    la imagen Debian bullseye-slim, que es la versión anterior a la actual versión de Debian.
    Esta hace de ella una versión estable y ligera.

# Elección

Para la elección final lo primero que he descartado las imágenes de terceros porque hay muy pocas
opciones, no son muy populares y tienen un mantenimiento dudoso.

Una vez descartadas las imagenes de terceros entre la imagen oficial de Bun, he estado sopensando
entre Alpine o openSUSE, ya que ambas son muy ligeras, con un consumo de recursos muy bajo y un mantenimiento
continuo. Aunque al final me he decantado por usar la imagen oficial de Bun, ya que es la que más se
ajusta a mis necesidades, y está muy bien optimizada para la ejecución del mismo. Además el mantenimiento
y las actualizaciones con mejoras de rendimiento están aseguradas, ya que mientras que Bun siga en desarrollo
la imagen oficial de Bun también lo hará, siguiendo las mismas directrices de desarrollo.

