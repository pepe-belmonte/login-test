# Login Test - Servidor

Este proyecto contiene la API rest que debe estar alojada en el servidor.

Está desarrollada en PHP y se trata de una API muy básica que permite el login, consulta y alta de usuarios.

La base de datos de prueba está alojada en mi servidor personal en [pepebelmonte.es](http://www.pepebelmonte.es)

## Creación de la tabla

Estructura de tabla para la tabla `users` (no se permite duplicidad por username)

```
CREATE TABLE `users` (
	`id` BIGINT(20) NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(60) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`email` VARCHAR(120) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`active` TINYINT(1) NOT NULL DEFAULT '1',
	`name` VARCHAR(60) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`surname` VARCHAR(60) NULL DEFAULT NULL COLLATE 'utf8mb4_unicode_ci',
	`password` VARCHAR(20) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`token` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_unicode_ci',
	PRIMARY KEY (`id`),
	UNIQUE INDEX `username` (`username`)
)
COLLATE='utf8mb4_unicode_ci'
ENGINE=InnoDB
AUTO_INCREMENT=2
;

```

## Inserción de datos de prueba en la tabla

Volcado de datos para la tabla `users`.

La contraseña está codificada en `base64`, para hacer login el usuario y la contraseña deben ser `pepe` en ambos campos.

```
INSERT INTO `users` (`id`, `username`, `email`, `active`, `name`, `surname`, `password`, `token`) VALUES
(1, 'pepe', 'pepe@pepebelmonte.es', 1, 'Pepe', 'Belmonte', 'cGVwZQ==', '');
```


