
# Criterios de elección

Para elegir la herramienta que nos ayudará a crear y ejecutar los test
de este proyecto en TypeScript, deben cumplir que siguen las mejores
prácticas posibles y que sea lo más compatible posible con Bun, que es
nuestro runtime. Además de ser versátil que nos ofrezcan aserciones
descriptivas sobre el estado de los tests, además de buscar estos en un
determinado directorio para su ejecución y así no tener que indicar la
ruta completa cada vez que se programa uno nuevo.

# Posibilidades

## Jest

Jest es un framework de para proyectos en JavaScript y TypeScript que proporciona 
una variedad de herramientas para escribir y ejecutar tests unitarios. A diferencia
de otros frameworks, Jest no requiere configuraciones adicionales para funcionar con
TypeScript.

Una característica importante de Jest es su capacidad para realizar *snapshots*.
Esto nos permite comparar el estado actual del componente con uno anterior y detectar
cambios en tiempo real. Además, Jest también destaca por su simplicidad a la hora de
ser usado.

Algunas de las opciones más comunes que permite incluyen la especificación de directorios
de búsqueda para las pruebas, la habilitación o deshabilitación de ciertas características,
y la configuración de timeouts para las pruebas.

Además de todo lo comentado Bun está desarrollando su *test-runner* propio para que sea
lo más compatible posible con este.

## Mocha

Mocha es un *test-runner* que permite escribir tests unitarios y de integración para garantizar
que el código se ejecute según lo esperado, este es usado tanto en proyectos de JavaScript
como de TypeScript.

La principal ventaja de este es su flexibilidad a la hora de realizar distintos tipos de test
el principal problema es que a pesar de ser compatible con Bun y poder usarse en estos proeyectos
la integración con esta no es total como en el cado de Jest.

## Bun test

Bun test es el *test-runner* que viene integrado en Bun el cual nos permite realizar test unitarios
de una manera sencilla y aprovechando la ejecución con el runtime de Bun, lo que proporciona que 
la compatibilidad con TypeScript está asegurada, además de seguir las buenas prácticas del lenguaje
y adaptarse perfectamente al entorno de nuestro proyecto.

Además de esto permite personalizar la salida de los tests para que no sean simples TAP y se automatice
la ejecución de los mismos sin tener que indicar la ruta. Además al estar muy inspirado en Jest, este
también busca la simpleza como característica a la hora de escribir los tests.

# Decisión final

Como conclusión he escogido la herramienta integrada *bun test* por cumplir con una buena integración
dentro de Bun, además de una completa compatibilidad con TypeScript y la ejecución de aserciones complejas
que nos reflejen de una manera más realista la ejecución de nuestros tests.


