
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
de manera nativa. La principal desventaja que presenta esta es que comenzó a desarrollarse
hace bastante tiempo y el desarrollo a día de hoy es muy descontinuado y para proyectos
TypeScript se hace muy dependiente de plugins desarrollados por la comunidad, por lo
que para un proyecto recién empezado como este creo que sería una herramienta que aumentaría
demasiado la deuda técnica en un medio/largo plazo.

## Bun run scripts

Bun run que es un comando integrado de Bun que además de poder usarse para ejecutar archivos
TypeScript también puede usarse automatizar tareas con la opción de ejecutar scripts definidos
en `package.json`. La prinicipal ventaja de definir tareas de esta manera es que estas se
ejecutan basandose en *JavaScriptCore* por lo que el rendimiento de la ejecución de estas tareas
es muy rápido en comparación a otras opciones como `deno task` que se basa en *V8*. Además de
ser esta herramienta el estándar a seguir en proyectos de Bun ya que se encuentra integrada
en el propio runtime y es lo que busca este proyecto, ser una herramienta todo en uno.

## Decisión final

Al final he decidico usar `bun run <script>` ya que al estar directamente integrado en el runtime
le aporta más coherencia a este ecosistema de Bun, siguiendo su estándar; y al medio plazo nos 
ahorraríamos mucha deuda que nos podría causar un proyecto como `gulp`. Además de esto objetivamente
en cuanto a rendimiento respecta da muy buenos rendimientos a la hora de ejecutar tareas realcionadas 
con TypeScript, cosa que un proyecto como `make` objetivamente sería peor en ese sentido, por no estar 
diseñada explicitamente para ello.

En conclusión, he seleccionado bun porque sigue el estándar de los proyectos con este runtime, tiene 
un rendimiento objetivamente superior al resto y facilita el mantenimiento a medio/largo plazo lo
que reduce la deuda técnica del proyecto para un futuro.

