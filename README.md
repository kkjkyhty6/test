# test
# Aplicación de Gestión de Tutores

Esta es una aplicación Ionic con Angular para gestionar tutores, usuarios y reservas.

## Requisitos

* Node.js (>= 14.0.0)
* npm (>= 6.0.0)
* Angular CLI (>= 12.0.0)
* Ionic CLI (>= 6.0.0)

## Instalación

1.  Clona el repositorio:

    ```bash
    git clone [URL_DEL_REPOSITORIO]
    cd tutor-app
    ```

2.  Instala las dependencias:

    ```bash
    npm install
    ```

## Configuración

1.  Reemplaza `TU_URL_DE_API` en los servicios (`tutor.service.ts`, `user.service.ts`, `booking.service.ts`) con las URLs de tu API.

## Ejecución

1.  Ejecuta la aplicación en el navegador:

    ```bash
    ionic serve
    ```

2.  Ejecuta la aplicación en un dispositivo móvil o emulador:

    ```bash
    ionic cordova run android --livereload # Para Android
    ionic cordova run ios --livereload # Para iOS
    ```

## Estructura del Proyecto

