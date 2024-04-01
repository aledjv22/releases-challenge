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

## Imagenes:

### Escritorio:

![](https://i.ibb.co/m8hf2Qc/Captura-desde-2024-04-01-02-06-46.png)

![](https://i.ibb.co/qmZMfbT/Captura-desde-2024-04-01-02-06-38.png)

![](https://i.ibb.co/mRxQbgF/Captura-desde-2024-04-01-02-05-17.png)

![](https://i.ibb.co/vJMNY2R/Captura-desde-2024-04-01-02-06-08.png)

![](https://i.ibb.co/d04TTbd/Captura-desde-2024-04-01-02-07-14.png)

![](https://i.ibb.co/41wvt82/Captura-desde-2024-04-01-02-07-44.png)

### Celular:

![](https://i.ibb.co/bm1Qnrk/Whats-App-Image-2024-04-01-at-2-29-04-AM.jpg)

![](https://i.ibb.co/XsKs5K9/Whats-App-Image-2024-04-01-at-2-29-04-AM-1.jpg)

![](https://i.ibb.co/Bg3G5Wk/Whats-App-Image-2024-04-01-at-2-29-04-AM-2.jpg)

![](https://i.ibb.co/BztjNwH/Whats-App-Image-2024-04-01-at-2-29-04-AM-3.jpg)

![](https://i.ibb.co/xYqhJPw/Whats-App-Image-2024-04-01-at-2-29-05-AM.jpg)

![](https://i.ibb.co/K7MrV2Q/Whats-App-Image-2024-04-01-at-2-29-05-AM-1.jpg)

![](https://i.ibb.co/SsssSwJ/Whats-App-Image-2024-04-01-at-2-31-08-AM.jpg)

![](https://i.ibb.co/72ShzSs/Whats-App-Image-2024-04-01-at-2-36-29-AM.jpg)

## Autor

**[Víctor Alejandro Díaz Jáuregui](https://github.com/aledjv22)**

## Licencia

Este proyecto está bajo la [licencia MIT](./LICENSE).
