
# Imagen base para un contenedor de pruebas

## Criterios

- **Versión actualizada y en mantenimiento**: la imagen debe estar actualizada
  y en mantenimiento. Ya que si no está actualizada, puede contener fallos de
  seguridad, y si no está en mantenimiento, puede que no se actualice en el
  futuro.
- **Sin software innecesario**: La imagen no debe contener ningún software
  innecesario. Ya que para ejecutar nuestros test no necesitamos un entorno
  completo, sino sólo lo necesario para ejecutar los test.
- **Bajo consumo de recursos**: La imagen debe consumir la menor cantidad de
  recursos posible. Ya que se trata de un entorno de pruebas, no queremos que
  consuma recursos que podrían ser utilizados por otros contenedores.

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
cuenta por haber muy pocas opciones, y no ser muy populares.

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

- `debian`
- `slim`
- `alpine`
- `distroless`

# Elección

Para la elección final lo primero que he descargado es la imagen oficial de Bun y de terceros
ya que esta no es muy popular y no hay muchas opciones, y he descartado porque la instalción
de Bun es muy simple y se puede hacer en cualquier imagen de Linux, sin dificultad.

Una vez descartada la imagen oficial de Bun, he estado sopensando entre Alpine y openSUSE micro, ya
que ambas son muy ligeras y con un consumo de recursos muy bajo. Finalmente me he decantado por
Alpine porque en terminos de lo ligera que es, es la mejor opción. Además de contar con un conjunto
muy mínimo de software, un consumo de recursos muy bajo y una gran popularidad, que le aporta un
mantenimiento muy activo y últimas actualizaciones.

