CRUD EXPRESS CON MONGODB
====================

Descripción
-----------

  Realizar un CRUD utilizando nodejs con el framework express

* Entregar el git del proyecto.
* Contar con una breve explicación de instalación y deploy.
* Utilizar como base de datos mongoDB.
* APIs (endpoint) deben recibir las siguientes variables:
  * Nombres
  * DNI
  * Celular
  * Correo

Nota
-----------

* Se tomará en cuenta como adicional integrar este proyecto en un container de Docker. (opcional).
* Se realizarán pruebas de estrés, debe soportar al menos 10 golpes en 1 seg.
* El proyecto debe enviarse por correo hasta las 12 de la noche de día de la evaluación.

PreRequisitos
-------------

* Tener instalado los siguientes programas:
  * Git
  * NodeJS (>=v12.14.1).
  * PM2
  * Docker

Instalación
-------------

* Crear Carpeta para descargar el repositorio.
  ```
    mkdir /home/usuario/dev
  ```

* Entrar en la carpeta creada.

  ```
  cd /home/usuario/dev
  ```

* Clonar el repositorio.

  ```
  git clone https://github.com/joeljb/CRUD-EXPRESS-CON-MONGODB.git
  ```

* Ir al proyecto.

  ```
  cd CRUD-EXPRESS-CON-MONGODB
  ```

* Ejecutarlo en modo desarrollo.

```
npm run dev
```

Ejecutarlo en producción
-------------

Para realizar el deploy debemos ejecutar:
* El comando para generar los archivos de producción.

```
npm run build
```
  Este comando creara la carpeta dist con los archivos para subir al servidor

git
-------------
Estamos trabajando con git flow para trabajar con master, develop, feature, hotfix y releases.

* iniciamos git flow con el siguiente comando

```
git flow init
```

* creamos el feature api-endpoint

```
git flow feature start api-endpoint
```

Comando con las independecias utilizadas
-------------

npm install --save express mongoose express-validator body-parser cors dotenv

npm install -D @babel/cli @babel/core @babel/node @babel/plugin-transform-runtime @babel/preset-env nodemon

npm install -D eslint eslint-config-airbnb-base eslint-plugin-babel eslint-plugin-import eslint-plugin-jest
