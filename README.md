# Releases Challenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# Prueba Técnica de Releases

Este proyecto surge a raíz de una prueba técnica para la cual se ha desarrollado una aplicación web que permite visualizar la subida y visualización de releases de un proyecto.

El mismo cuenta con dos partes, una pública y otra privada.
En la sección pública se puede visualizar la lista de releases de un proyecto, mientras que en la sección privada se puede subir, editar y eliminar un release.

## Rutas

- `/` : Página principal de la aplicación, donde se visualizan los releases.
- `/sign-in`: Página de inicio de sesión mediante correo o cuenta de Google.
- `/sign-up`: Página de registro de usuario.
- `/release/:id`: Página de visualización de un release en particular.
- `/release/create`: Página de creación de un release. Solo accesible para usuarios autenticados.
- `/release/edit/:id`: Página de edición de un release. Solo accesible para usuarios autenticados.
- `/**`: Página de error 404.

## Funcionalidades

- **Registro de usuario**: Permite a los usuarios registrarse en la aplicación.
- **Inicio de sesión**: Permite a los usuarios iniciar sesión en la aplicación.
- **Visualización de releases**: Permite a los usuarios visualizar los releases de un proyecto.
- **Creación de releases**: Permite a los usuarios autenticados crear un release.
- **Edición de releases**: Permite a los usuarios autenticados editar un release.
- **Eliminación de releases**: Permite a los usuarios autenticados eliminar un release.

## Tecnologías utilizadas

- **Angular**: Framework de desarrollo de aplicaciones web.
- **Firebase**: Plataforma de desarrollo de aplicaciones web y móviles.
- **Angular Fire**: Librería de Angular para interactuar con Firebase.

## Instalación

Para instalar la aplicación, se debe clonar el repositorio y ejecutar el siguiente comando:

```bash
npm install
```

## Ejecución

Para ejecutar la aplicación, se debe ejecutar el siguiente comando:

```bash
ng serve
```

Luego de ejecutar el comando, se podrá acceder a la aplicación en la siguiente dirección: `http://localhost:4200/`.

## Autor

**[Víctor Alejandro Díaz Jáuregui](https://github.com/aledjv22)**

## Licencia

Este proyecto está bajo la [licencia MIT](./LICENSE).