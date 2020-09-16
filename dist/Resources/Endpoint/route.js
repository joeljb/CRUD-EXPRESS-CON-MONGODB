"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _Endpoints = _interopRequireDefault(require("./Endpoints.js"));

var router = _express["default"].Router();

router.get('/endpoints', _Endpoints["default"].consultar);
router.get('/endpoint/:id', _Endpoints["default"].consultarId);
router.post('/endpoint/crear', _Endpoints["default"].crear);
router.put('/endpoint/editar', _Endpoints["default"].editar);
router["delete"]('/endpoint/eliminar', _Endpoints["default"].eliminar);
var _default = router;
exports["default"] = _default;