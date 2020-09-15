"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _errorTypes = _interopRequireDefault(require("../Controllers/errorTypes"));

var middlewares = /*#__PURE__*/function () {
  function middlewares() {
    (0, _classCallCheck2["default"])(this, middlewares);
  }

  (0, _createClass2["default"])(middlewares, [{
    key: "errorHandler",

    /*
       Este middleware va al final de todos los middleware y rutas.
       middleware de manejo de errores.
    */
    value: function errorHandler(error, req, res, next) {
      console.log("ejecutando middleware de control de errores");
      if (error instanceof _errorTypes["default"].InfoError) res.status(200).json({
        success: false,
        error: error.message
      });else if (error instanceof _errorTypes["default"].Error404) res.status(404).json({
        success: false,
        error: error.message
      });else if (error instanceof _errorTypes["default"].Error403) res.status(403).json({
        success: false,
        error: error.message
      });else if (error instanceof _errorTypes["default"].Error401) res.status(401).json({
        success: false,
        error: error.message
      });else if (error.name == "ValidationError") //de mongoose
        res.status(200).json({
          success: false,
          error: error.message
        });else if (error.message) res.status(500).json({
        success: false,
        error: error.message
      });else next();
    }
    /*
      Este middleware va al final de todos los middleware y rutas.
      middleware para manejar notFound
    */

  }, {
    key: "notFoundHandler",
    value: function notFoundHandler(req, res, next) {
      console.log("ejecutando middleware para manejo de endpoints no encontrados");
      res.status(404).json({
        error: "Url no encontrada"
      });
    }
  }]);
  return middlewares;
}();

var _default = new middlewares();

exports["default"] = _default;