"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _route = _interopRequireDefault(require("./Resources/Endpoint/route.js"));

var setRouter = function setRouter(app) {
  // app.use('/', (req, res) => {
  //   res.json({ data: "hola" });
  // });
  app.use('/api', _route["default"]);
};

var _default = setRouter;
exports["default"] = _default;