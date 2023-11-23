
# Criterios de elección

Para elegir la herramienta que nos ayudará a crear y ejecutar los test
de este proyecto en TypeScript, deben cumplir que siguen características:

- **Compatible con TypeScript**: la herramienta que se seleccione debe ser
compatible de manera sencilla con TypeScript, ya que ya que nuestro runtime
y todo lo relacionado con el proyecto lo es, esta parte no será menos.
- **Mantenimiento en activo**: la herramienta debe mantenerse en mantenimiento
con actualizaciones frecuentes.
- **Proyección a futuro**: la herramienta debe tener la ambición de intentar
continuar por más tiempo.

# Posibilidades

## Bibliotecas de aserciones

### [Chai](https://www.chaijs.com/)

Chai es la biblioteca con aserciones BDD/TDD más popular, que además se encuentra en
el entorno npm, característica que nos conviene en nuestro proyecto. Esta parece muy simple
y versátil. La única desventaja es que para que funcione con TypeScript bien hay que importar
los tipos desde otra [dependencia](https://www.npmjs.com/package/@types/sinon). Aún
así parece una buena opción a tener en cuenta por su sencillez y comunidad que mantiene
el proyecto actualizado.

### [Sinon](https://sinonjs.org/)

Es otra biblioteca muy popular de aserciones que por lo que he visto también es bastante
popular, tiene buena pinta ya que tiene 100 puntos en [synk](https://snyk.io/advisor/npm-package/sinon)
y tiene más variedad de asercioens lo que por un lado está bien porque la hace más versátil
pero también más compleja a la hora de mantener el proyecto. La desventaja que tiene esta
es la misma que la anterior, es que para hacerla funcionar con TypeScript hay que importar
otra [dependencia](https://snyk.io/advisor/npm-package/@types/sinon) con la definición de tipos.

### [Earl](https://github.com/l2beat/earl)

Esta es la que tiene la valoración más baja en [synk](https://snyk.io/advisor/npm-package/sinon) que
es de 70 puntos ya que no es muy popular, pero eso no es un problema muy grande en mi opinión
en este proyecto. La parte positiva de esta es que funciona de manera nativa con TypeScript, pero
el problema principal de esta es que su mantenimiento es un poco escaso, aunque de todas las
bibiliotecas vistas esta me parece la más interesante porque en mi opinión la compatibilidad
nativa con TypeScript le hace ganar muchos puntos y creo que puede mantenerse en el largo plazo
y crecer lo que le daría un mantenimiento más estable.

## Frameworks y test runners

### [Jest](https://jestjs.io/)

Jest es un framework para tests de para proyectos en JavaScript y TypeScript que 
proporciona  una variedad de herramientas para escribir y ejecutar tests unitarios.
A diferencia de otros frameworks, Jest no requiere configuraciones adicionales para
funcionar con TypeScript lo que es una gran ventaja para nuestro proyecto.

Como principales características tiene su simplicidad para hacerlo funcionar lo que 
ayuda al mantenimiento, su gran comunidad que lo mantiene actualizado y la velocidad
que proporciona al poder ejecutar los distintos test en paralelo que es una característica
primordial, ya que los test deben ser independientes.

Además de todo lo comentado Bun está desarrollando su *test-runner* propio para que sea
lo más compatible posible con este.

### [Mocha](https://mochajs.org/)

Mocha es un *test-runner* que permite escribir tests unitarios y de integración para garantizar
que el código se ejecute según lo esperado, este es usado tanto en proyectos de JavaScript
como de TypeScript.

La principal ventaja de este es su flexibilidad a la hora de realizar distintos tipos de test
el principal problema es que ultimamente su desarrollo no ha sido muy continuado, lo que pude 
dar que pensar que este puede ser sustituido en el futuro por opciones como *Jest* o *AVA* y
que se necesita una biblioteca de aserciones externa como puede ser *Chai* para poder hacer
la comprobación de tipos necesaria, lo que dificulta un poco tenerlo en cuenta ya que la compatibilidad
con TypeScript no es del todo sencilla.

### [Bun test](https://bun.sh/docs/cli/test)

Bun test es el *test-runner* que viene integrado en Bun el cual nos permite realizar test unitarios
de una manera sencilla, automática y aprovechando la ejecución de manera muy rápida con el runtime de Bun, lo que 
proporciona que la compatibilidad con TypeScript está asegurada, además de seguir las buenas prácticas
del lenguaje y adaptarse perfectamente al entorno de nuestro proyecto.

Además de esto permite personalizar la salida de los tests para que no sean simples TAP y se automatice
la ejecución de los mismos sin tener que indicar la ruta. Además al estar muy inspirado en Jest, este
también busca la simpleza como característica a la hora de escribir los tests, lo que facilita el 
mantenimiento de su proyecto y la comunidad pese a no ser muy grande tiene al proyecto con un mantenimiento
muy bueno y se postula como una herramienta a intentar convertirse un estándar en JavaScript y TypeScript
como runtime al largo plazo.

# Selección final

Como decisión final he escogido la herramienta integrada que viene en Bun, con la orden *test*, ya que
este cumple perfectamente los criterios establecidos, permite ejecutar los test con el runitme de Bun
por lo que estos además de ejecutarse de manera automáica se ejecutan muy rápido y además tiene sus propias
funciones para las aserciones, por lo que no se necesitará ninguna biblioteca externa.


