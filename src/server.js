//importamos express framework principal
import express from 'express';

//importamos para trabajar con http
import http from 'http';

//importamos cors para dar acceso 
import cors from 'cors';

//importamos body-parser para reciber json
import bodyParser from 'body-parser';

//importamos cluster para definir la cantidad de nucleos que vamos a usar
import cluster from 'cluster';

//importamos el modulo OS para saber la cantidad de nucleos
import os from 'os';

import dbMongo from './Services/dbMongo'; //importamos el modulo demongo db

import middlewares from './Services/middleware' //importamos los middlewares


import setRouter from './appRouter.js'; // importamos el router 

import config from './config/index'

console.log('config')
console.log(config)
console.log('config')

//eventos para la conexion rechazada
process.on('unhandledRejection', (rejectionErr) => {
  // Won't execute
  console.log('unhandledRejection Err::', rejectionErr);
  console.log('unhandledRejection Stack::', JSON.stringify(rejectionErr.stack));
});

//evento para detectar erores no manejados
process.on('uncaughtException', (uncaughtExc) => {
  console.log('uncaughtException Err::', uncaughtExc);
  console.log('uncaughtException Stack::', JSON.stringify(uncaughtExc.stack));
});



const app = express();
let workers = [];

//Configure el número de procesos de trabajo para compartir el puerto que se definirá al configurar el servidor
const setupWorkerProcesses = () => {
  // leer el número de núcleos en el sistema
  let numCores = os.cpus().length;
  console.log('Configuración del clúster maestro ' + numCores + ' trabajadores');

  //recorremos en el número de núcleos que debe utilizar una aplicación
  // el ejemplo actual los utilizará todos
  for (let i = 0; i < numCores; i++) {
    // creando trabajadores y empujando la referencia en una matriz
    // estas referencias se pueden utilizar para recibir mensajes de trabajadores
    workers.push(cluster.fork());

    // para recibir mensajes del proceso de trabajo
    workers[i].on('message', function (message) {
      console.log(message);
    });
  }

  // el proceso está agrupado en un núcleo y se asigna la identificación del proceso
  cluster.on('online', function (worker) {
    console.log('trabajador esta escuchando en: ' + worker.process.pid );
  });

  // Si alguno de los procesos de trabajo muere, se comienza uno nuevo simplemente bifurcando otro
  cluster.on('exit', function (worker, code, signal) {
    workers.push(cluster.fork());
    // recibir mensajes del proceso de trabajo
    workers[workers.length - 1].on('message', function (message) {
      console.log(message);
    });
  });
};

const setUpExpress = () => {
  dbMongo() //iniciamos la conexion de mongodb

  // crear server
  app.server = http.createServer(app);

  app.use(cors({ origin: '*' }));
  
  // parse application/json

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  app.disable('x-powered-by');

  // routes
  setRouter(app);

  app.use(middlewares.errorHandler);
  app.use(middlewares.notFoundHandler);

  // inciar server
  app.server.listen(config.port, () => {
    console.log(`El servidor esta corriendo en => http://localhost:${app.server.address().port} con el id del proceso ${process.pid}`);
  });

  // si ocurre algun error
  app.on('error', (appErr, appCtx) => {
    console.error('app error', appErr.stack);
    console.error('en la url', appCtx.req.url);
    console.error('con cabecera', appCtx.req.headers);
  });
};

/**
 * Setup server either with clustering or without it
 * @param isClusterRequired
 * @constructor
 */
const setupServer = (isClusterRequired) => {

  // si es un proceso maestro, se llama a la configuración del proceso de trabajo
  if (isClusterRequired && cluster.isMaster) {
    setupWorkerProcesses();
  } else {
    // para configurar las configuraciones del servidor y compartir la dirección del puerto para las solicitudes entrantes
    setUpExpress();
  }
};

setupServer(true);


