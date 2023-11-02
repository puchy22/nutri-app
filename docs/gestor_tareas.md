
# Gestor de tareas

Una parte importante del proyecto es definir tareas a ejecutar automaticamente
esto nos ahorrará mucho tiempo en el desarrollo del proyecto para no tener que
realizar constantemente tareas repetitivas. Para esto contamos con las siguientes
opciones:

## Make

Opción clásica y muy potente, su principal ventaja es su gran potencia con 
su simplicidad y la estabilidad que este proporciona al proyecto ya que es 
un gestor de tareas muy usado y que tiene ya muchos años. La principal desventaja
que tiene a la hora de usarse con TypeScript es que no tiene soporte nativo.

## Gulp

Gulp es una opción que en un inicio se creó para usarse en un entorno JavaScript
para automatizar tareas y agilizar el flujo de trabajo que además soporta TypeScript
de manera nativa. La principal desventaja que presenta este en el proyecto es que con
Bun debería ser instalado como una dependencia más y necesita de conocer un poco su
sintaxis de código para poder crear estas tareas automáticas.

## Bun run scripts

Bun run que es un comando integrado de Bun además de poder usarse para ejecutar archivos
TypeScript también puede usarse para la tarea de automatizar tareas con la opción
de ejecutar scripts definidos en `package.json`. La prinicipal ventaja de definir tareas
de esta manera es que estas se ejecutan basandose en *JavaScriptCore* por lo que el rendimiento
de la ejecución de estas tareas es muy rápido en comparación a otras opciones como `deno task`
que se basa en *V8*.

La principal desventaja que tiene usar este frente a `deno task` es que la comprobación de sintaxis
se tiene que realizar de manera estática hay que usar la herramienta `tsc` ya que Bun no hace comprobación
de tipos al ejecutar una tarea que pueda ser un `.ts`.

## Decisión final

Al final he decidico usar `bun run <script>` ya que al estar directamente integrado
aprovecha muy bien la velocidad de ejecución que tiene bun por usar *JavaScriptCore*. Además que
esto le aporta más empaque al proyecto y reduce el número de dependencias con herramientas externas
como podrían ser `make` o `gulp`, lo que podría a la larga aumentar la deuda técnica.

