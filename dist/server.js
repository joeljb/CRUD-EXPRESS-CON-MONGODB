"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cluster = _interopRequireDefault(require("cluster"));

var _os = _interopRequireDefault(require("os"));

var _dbMongo = _interopRequireDefault(require("./Services/dbMongo"));

var _middleware = _interopRequireDefault(require("./Services/middleware"));

var _appRouter = _interopRequireDefault(require("./appRouter.js"));

//importamos express framework principal
//importamos para trabajar con http
//importamos cors para dar acceso 
//importamos body-parser para reciber json
//importamos cluster para definir la cantidad de nucleos que vamos a usar
//importamos el modulo OS para saber la cantidad de nucleos
//importamos el modulo demongo db
//importamos los middlewares
// importamos el router 
//eventos para la conexion rechazada
process.on('unhandledRejection', function (rejectionErr) {
  // Won't execute
  console.log('unhandledRejection Err::', rejectionErr);
  console.log('unhandledRejection Stack::', JSON.stringify(rejectionErr.stack));
}); //evento para detectar erores no manejados

process.on('uncaughtException', function (uncaughtExc) {
  console.log('uncaughtException Err::', uncaughtExc);
  console.log('uncaughtException Stack::', JSON.stringify(uncaughtExc.stack));
});
var app = (0, _express["default"])();
var workers = []; //Configure el número de procesos de trabajo para compartir el puerto que se definirá al configurar el servidor

var setupWorkerProcesses = function setupWorkerProcesses() {
  // leer el número de núcleos en el sistema
  var numCores = _os["default"].cpus().length;

  console.log('Configuración del clúster maestro ' + numCores + ' trabajadores'); //recorremos en el número de núcleos que debe utilizar una aplicación
  // el ejemplo actual los utilizará todos

  for (var i = 0; i < numCores; i++) {
    // creando trabajadores y empujando la referencia en una matriz
    // estas referencias se pueden utilizar para recibir mensajes de trabajadores
    workers.push(_cluster["default"].fork()); // para recibir mensajes del proceso de trabajo

    workers[i].on('message', function (message) {
      console.log(message);
    });
  } // el proceso está agrupado en un núcleo y se asigna la identificación del proceso


  _cluster["default"].on('online', function (worker) {
    console.log('trabajador esta escuchando en: ' + worker.process.pid);
  }); // Si alguno de los procesos de trabajo muere, se comienza uno nuevo simplemente bifurcando otro


  _cluster["default"].on('exit', function (worker, code, signal) {
    workers.push(_cluster["default"].fork()); // recibir mensajes del proceso de trabajo

    workers[workers.length - 1].on('message', function (message) {
      console.log(message);
    });
  });
};

var setUpExpress = function setUpExpress() {
  (0, _dbMongo["default"])(); //iniciamos la conexion de mongodb
  // crear server

  app.server = _http["default"].createServer(app);
  app.use((0, _cors["default"])({
    origin: '*'
  })); // parse application/json

  app.use(_bodyParser["default"].urlencoded({
    extended: false
  }));
  app.use(_bodyParser["default"].json());
  app.disable('x-powered-by'); // routes

  (0, _appRouter["default"])(app);
  app.use(_middleware["default"].errorHandler);
  app.use(_middleware["default"].notFoundHandler); // inciar server

  app.server.listen('8000', function () {
    console.log("El servidor esta corriendo en => http://localhost:".concat(app.server.address().port, " con el id del proceso ").concat(process.pid));
  }); // si ocurre algun error

  app.on('error', function (appErr, appCtx) {
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


var setupServer = function setupServer(isClusterRequired) {
  // si es un proceso maestro, se llama a la configuración del proceso de trabajo
  if (isClusterRequired && _cluster["default"].isMaster) {
    setupWorkerProcesses();
  } else {
    // para configurar las configuraciones del servidor y compartir la dirección del puerto para las solicitudes entrantes
    setUpExpress();
  }
};

setupServer(true);