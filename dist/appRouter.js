"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var setRouter = function setRouter(app) {
  app.use('/', function (req, res) {
    res.json({
      data: "hola"
    });
  });
};

var _default = setRouter;
exports["default"] = _default;