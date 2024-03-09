# LoginTest de Pepe Belmonte para el Grupo Orenes

Este proyecto ha sido generado con  [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

Como framework de CSS se ha utilizado [Tailwind](https://tailwindcss.com/) para ahorrar tiempo en la definición de estilos, lo que hace que los ficheros SCSS sean más reducidos y sólo tengan los estilos definidos para cada uno de los componentes.

En el aspecto de seguridad se simula el Token desde el back, codificándolo en Base64. En este Token van los datos del usuario logueado, de forma similar a como se haría con JWT.

Para el desarrollo se ha seguido una estructura Clean Code, separando las capas de los componentes de vista del resto de la estructura de negocio.

```
app 
  | - Componente\Presentación 
  |              | - Componentes no compartidos
  |              | - Vista
  |
  | - Shared
  |   | - apis (Servicios)
  | - Components (componentes compartido)
  | - Guard (AuthGuard para el control de acceso al Router)
  | - Interceptors (interceptores de llamadas de la api - no se utiliza en el proyecto)
  | - Interfaces (definición de los DTO de entrada)
  | - Models (definición de los interfaces de salida)
  | - Servicios comunes (utilidades de control de errores, servicio de autenticación, etc.)

assets (iconos, imágenes estáticas, etc.)
environment (ficheros de configuración de la aplicación)

```



## Arranque en servidor local

Ejecuta `ng serve` para el servidor de desarrollo. Navega a la url `http://localhost:4200/`.

Para arrancar el servidor de API basta con copiar el contenido de la carpeta api-server a un servidor que soporte PHP y MySQL/MariaDB. El servidor tiene su propio fichero README.md

## Generar paquete distribuible

Ejecuta `ng build production` para construir el proyecto. Se generará el distribuible en la carpeta `dist/`.

Ejecuta `ng build development` para construir el proyecto. Se generará el distribuible en la carpeta `dist/`.

Si vas a alojarlo en el servidor dentro de una carpeta deberás hacerlo con `ng build --base-href=/carpeta `

## Fichero de configuración

En la carpeta environment hay dos ficheros de configuración para indicar el servidor de api.
```
export const environment = {
  production: false,
  apiUrl: 'http://www.pepebelmonte.es/api'
  //apiUrl: 'http://localhost/api'
};
```

## Prueba de la aplicación

Actualmente el proyecto se encuentra alojado en mi servidor personal [pepebelmonte.es/test-orenes](http://www.pepebelmonte.es/test-orenes) y es completamente funcional.

## Otros test
En mi servidor [pepebelmonte.es/test](http://www.pepebelmonte.es/test) hay otras antiguas pruebas de concepto realizadas para varias empresas, principalmente en HTML, CSS y Javascript.

