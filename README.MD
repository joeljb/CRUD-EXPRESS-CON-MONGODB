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
  * NodeJS (>=v12.14.1).  https://github.com/nvm-sh/nvm
  * PM2   npm install -g pm2
  * Docker   https://docs.docker.com/engine/install/debian/

Ejecutar en desarrollo
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

* Ejecutarlo.

```
npm run dev
```


Estructura de Carpetas
-------------------------------

* **dist** : Carpeta donde van a estar los archivos de produccion.
* **src** : Contiene los módulos creados.

    * **config**: Para agregar los archivos de configuracion.
      * **index.js**: esta las variables de configuracion como port y url de mongodb.
    * **Controllers**: Carpeta destinadas para agregar controladores.
      * **errorTypes.js**: Para manejar los errores.
    * **Resources**: Carpeta destinadas para los recursos.
      * **Enpoint**: Carpeta donde van a estar los archivos para este recurso.
        * **Endpoint.js**: El archivo donde estan los motodos para consultar, cousultarId, crear, editar y eliminar.
        * **ModelEndpoint.js**: donde esta definido el modelo.
        * **route.js**: donde esta definidas todas las rutas para este recurso.
    * **Services**: Esta el servicios del middleware y de mongodb.

        * **middleware.js**: Esta un middleware para la url no econtradas y un middleware para manejar errores.

        * **dbMongo.js**:Archivo para hacer la conexion a mongodb.

    * **appRouter.js**: Donde van a estar las rutas todas las rutas.

    * **server.js**: modulo principal de la aplicacion para el iniciar
    
* **.gitignore**: Archivo para ignorar las carpetas o archivos que no se quiere
que se suba a gitlab.

* **README.md**: Archivo donde esta la documentación del proyecto.

* **package.json**: Archivo para cargar los paquetes y las versiones.


Ejecutarlo en producción con pm2
-------------

Para realizar el deploy debemos ejecutar:
* El comando para generar los archivos de producción.

```
npm run build
```
  Este comando creara la carpeta dist con los archivos para subir al servidor

  * Ejecutar el proyecto com pm2.

```
  pm2 start dist/server.js -i max
```
  * ejecutar el comando para que se ejecute con el arranque del computador.

```
  pm2 startup
```

  * luego ejecutar en la consola el path que le aparece.

```
  sudo env PATH=$PATH:/home/joeljb/.nvm/versions/node/v12.14.1/bin /home/joeljb/.nvm/versions/node/v12.14.1/lib/node_modules/pm2/bin/pm2 startup systemd -u joeljb --hp /home/joeljb
```

 * y por ultimo .

```
  pm2 save
```

Ejecutarlo en producción con docker
-------------

descargar las imagenes de docker

```
docker pull joeljbperu/mongo-db:4.4
```

```
docker pull joeljbperu/cred-express-mongo
```

* ejecutar la imagen de mongodb

```
docker run -d -p 27017:27017 --name=mongodb mongo:4.4
```

* ejecutar la imagen de express

```
docker run -p 8000:3000 joeljbperu/cred-express-mongo
```


git y git flow
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

* una vez terminado la programacion se finaliza el feature

```
git flow feature finish api-endpoint
```
* iniciamos el release a la version 1.0

```
git flow release start '1.0'
```
* y por ultimo finalizamos el release 

```
git flow release finish '1.0'
```



Comando con las independecias utilizadas
-------------

npm install --save express mongoose express-validator body-parser cors dotenv

npm install -D @babel/cli @babel/core @babel/node @babel/plugin-transform-runtime @babel/preset-env nodemon

npm install -D eslint eslint-config-airbnb-base eslint-plugin-babel eslint-plugin-import eslint-plugin-jest



-------------

rutas disponibles
-------------

http://localhost:8000/api/endpoints

http://localhost:8000/api/endpoint/5f6136cfc734a27ed8eca10f

http://localhost:8000/api/endpoint/eliminar
{
	id: "5f610560c2bdcee672b37bcb"
}



http://localhost:8000/api/endpoint/editar
{
  "name": "joel jose",
  "dni": "1234567",
  "cellPhone": "12345679",
  "email": "joelEditado@gmail.com",
}

http://tdtiperu.com:35001/api/endpoint/crear
{
  "name": "joel jose bolivar gutierrez ",
  "email": "joel_jose99@hotmail.com",
  "cellPhone": "982066147",
  "dni": "20002349",
}



-------------
[web donde esta ejecutandose en producción](http://tdtiperu.com:8000/api/endpoints)
