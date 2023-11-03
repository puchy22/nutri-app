
# Gestor de dependencias

## Criterios de elección

Para mi aplicación considero que para instalar las dependencias necesarias para el proyecto
necesito alguno que me ofrezaca unas buenas prestaciones en velocidad de instalación y que 
siga el estándar de paquetes del ecosistema Bun que en este caso es npm.

## Distintas opciones

Como gestores de dependencias tenemos varias opciones como *npm*, *yarn* o *pnmp*,
que siguen los estándares que Bun como runtime soporta aunque para este proyecto considero que
lo más interesante es usar el que viene integrado en Bun. Ya que así aprovechamos las claras
mejoras en velocidad que este gestor de dependencias tiene frente a los demás.

En comparación frente al muy usado *npm*, usado principalmente en proyectos con *Node*
el integrado en bun es 25 veces más rápido, por lo que objetivamente eso es una gran ventaja;
además sigue siendo compatible con proyectos *Node*.

En el caso de las otras alternativas como *yarn* y *pnpm* principlamente se destaca la velocidad
frente a *npm* pero esta velocidad sigue siendo superada por bun, además que opciones como *yarn*
tiene el problema de que no es compatible con todos los paquetes del registro de npm cosa que no
nos beneficia ya que bun se mueve en ese ecosistema.

## Aclaración final sobre la decisión

Por lo que como conclusión por la superación objetiva en prestaciones, considero que Bun es la 
mejor opción con diferencia frente a las otras que a pesar de ser más utilizadas también son más
antiguas por lo que acarrean ciertos problemas que la herramienta integrada en Bun resuelve además
siguiendo el estándar, aportando compatibilidad con el ecosistema de npm y garantizando mucho mejor
rendimiento objetivo en cuando a velocidad refiere.

