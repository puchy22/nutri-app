
# Elección del runtime

Al ser desarrollado este proyecto con TypeScript y ser este un superconjunto de JavaScript
es necesario escoger un runtime para poder ejecutar el código fuera del navegador. Para
este existen varias opciones a tener en cuenta cada una con características propias.

## Node

Es la opción más usada con mucha diferencia, por ser el primer runtime popular escrito
para el servidor. Esto también tiene sus desventajas para mi proyecto ya que no ejecuta
TypeScript de manera nativa, sino que primero habría que transpilarlo a JavaScript primero.

Además que nuevos proyectos como *Bun* o *Deno* traen ya bastante compatibilidad con proyectos
Node por lo que para un proyecto nuevo que no necesita mantenibilidad a 3 o 4 años vista
no es interesante.

## Deno

Se trata de un runtime mucho más moderno, que ya soporta TypeScript por defecto que ya
fue construido para arreglar algunos errores que ya arrastraba Node, en este caso ya fue
construido pensando en la seguridad, además de tener un *formatter* y un *test runner*
por defecto. Uno de los problemas principales que tiene este es que al ser menos popular
que Node es que algunas características siguen poco desarrolladas o inestables.

Y la desventaja principal que tiene frente a su actual competidor en los próximos años
es que su rendimiento es menor, por lo que esto deja a Deno en un punto intermedio
que para proyectos nuevos como el mío no sé si sería lo más recomendable.

## Bun

Este es el más reciente ya que la versión 1.0 salió este pasado septiembre, habiendo
14 años de diferencia con la salida de Node. Este busca ser una solución todo en uno
para la ejecución de JavaScript por la parte del servidor. Su principal características
es el rendimiento, demostrando unas prestaciones en velocidad mucho mayores que sus competidores
Node y Deno.

Esto sucede ya que Bun basa su *JS engine* en *JavaScriptCore* en lugar de en  *V8* como hacen
sus competidores, lo que le está permitiendo multiplicar sus prestaciones en velocidad en todos
los sentidos frente a Node y Deno.

Otra característica positiva es la de que también ejecuta TypeScript de forma nativa, además
de tener integrado todo un set de herramientas (manejador de dependencias, *test runner*, etc.)
muy parecido a Deno en este aspecto, pero centrandose más en las prestaciones y compatibilidad con Node.

Por contra, la principal desventaja de Bun es que sigue estando en la versión 1.0
por lo que la comunidad no es muy grande a la hora de resolver fallos o preguntas y muchas
características siguen en versiones muy tempranas de desarrollo por lo que es aún bastante
inestable, además de que siempre queda la duda de si este proyecto conseguirá seguir adelante
o será otro runtime más de JavaScript que en unos años ni lo recordaremos (aunque no tiene pinta).

## Decisión final

Una vez vistas todas estas características la opción más interesante para mi proyecto creo que es
**Bun** pese a su joven desarrollo, la característica principal del rendimiento me parece muy superior
a los demás, siendo en algunas comparaciones 4 veces más rápido que Node; lo que haría que mi problema
de minimización con restricciones se resolviera de una manera muy óptima.

Además de esto, la característica de ser una solución todo en uno es muy similar a Deno por lo que pese
a su corto tiempo de vida a conseguido mucha comunidad que lo apoya, por lo que para nuevos proyectos
como este me parece una buena opción.

