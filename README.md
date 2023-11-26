# nutri-app

## Descripción del problema

Soy una persona que le gusta el deporte y mantenerse en forma por lo que necesito una manera
sencilla de ir comprobando si mi compra se está adaptando a mis objetivos en el deporte o en
mi vida para mantenerme saludable.

## Clase compra

Entidad encargada de gestionar las lista de la compra, en este se extrae la información de los
tickets, es decir, los diferentes productos y la cantidad que se compra de cada producto.

Para probar el funcionamiento de la clase se hace con el comando `bun run test`.

Para comprobar la sintaxis de esta entidad se debe ejecutar el script `check` con `bun run check`.

## Contenedor de pruebas

Para construir el contenedor de manera local se pueden usar los siguientes comandos:

```bash
podman build -t nutri-app:latest .
```

o bien

```bash
docker build -t nutri-app:latest .
```

Para ejecutar el contenedor se puede usar el siguiente comando:

```bash
podman run -it --rm nutri-app:latest
```

o bien

```bash
docker run -it --rm nutri-app:latest
```

O usar la imagen que se encuentra en el registro de docker:

```bash
podman run -it --rm docker.io/puchy22/nutri-app:latest
```

o bien

```bash
docker run -it --rm docker.io/puchy22/nutri-app:latest
```


# Estructura y planificación del proyecto

- [Historias de Usuario](./docs/historias_usuario.md)
- [Milestones](./docs/milestones.md)

# Documentación del repositorio

- [Elección runtime](./docs/runtime.md)
- [Elección gestor de dependencias](./docs/gestor_dependencias.md)
- [Elección gestor de tareas](./docs/gestor_tareas.md)
- [Elección herramienta de test](./docs/test_runner.md)
- [Elección de la imagen base](./docs/imagen_base.md)


