
# Criterios de elección

- **Gratuito**: El proyecto es de código abierto y no se puede pagar por un servicio de CI/CD.
- **Integración con GitHub**: El proyecto está alojado en GitHub y se quiere aprovechar las 
    ventajas de integración que ofrece. Por lo que tiene que usar una API checks.
- **Compatibilidad con TypeScript y Docker**: El proyecto está escrito en TypeScript y se 
    quiere usar Docker para el despliegue, por lo que el servicio de CI/CD tiene que
    ser compatible con estas tecnologías.

# Elección

## [GitHub Actions](https://docs.github.com/en/actions)

GitHub Actions es un servicio de CI/CD gratuito que es la herramienta por defecto de GitHub.
Esta herramienta es perfecta para el proyecto ya que es donde estamos desarrollando el proyecto,
y tiene una buena integración con TypeScript, Docker y Bun.

## [AWS CodePipeline](https://aws.amazon.com/codepipeline/)

AWS CodePipeline es un servicio de CI/CD que se puede integrar con GitHub. Este servicio
se puede usar para desplegar el código y lanzar los test en un Bucket de S3. El problema
que tiene un plan gratuito que esta limitado a tener un solo pipeline V1 activo, que tiene
menos carácteristicas que el pipeline V2.

## [AppVeyor](https://www.appveyor.com/)

AppVeyor es un servicio de CI/CD gratuito que se puede integrar con GitHub. Este servicio
se puede usar con un plan gratuito que nos permite tener un trabajo activo a la vez
y definir un máximo de 5, que es suficiente para el proyecto. Otra ventaja es que te permite
probar sobre mucha variedad de sistemas operativos.

## [GitLab CI/CD](https://docs.gitlab.com/ee/topics/build_your_application.html)

GitLab ofrece un servicio de CI/CD gratuito de código abierto que se puede integrar con GitHub.
Este te permite integrar workflows de CI/CD en el repositorio de GitHub, con amplia variedad
de compatibilidad, como Docker, TypeScript y Bun.

## [Drone CI](https://www.drone.io/)

Drone CI es un servicio de CI/CD gratuito que se puede integrar con GitHub. Este servicio
permite probar test unitarios de manera sencilla y dentro de un contenedor de Docker. El
problema es que ya no admite nuevos registros, y hay que ejecutarlo en un servidor propio.

## [Codeship](https://www.cloudbees.com/products/codeship)

Codeship es un servicio de CI/CD gratuito que se puede integrar con GitHub. Este servicio
permite probar y construir el proyecto dentro de un contenedor de Docker. Además permite
la integración con GitHub con un simple token.

# Versiones del lenguaje probadas

Se ha probado la versión canary de Bun, con la GitHub Actionsn y la versión del contenedor
de Docker con

