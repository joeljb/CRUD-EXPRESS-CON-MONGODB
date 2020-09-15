"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var errorTypes = {
  Error401: function Error401(msg) {
    //no autorizado
    var err = Error.apply(this, [msg]);
    this.name = err.name = "Error401";
    this.message = err.message;
    this.stack = err.stack;
    return this;
  },
  Error403: function Error403(msg) {
    //prohibido
    var err = Error.apply(this, [msg]);
    this.name = err.name = "Error403";
    this.message = err.message;
    this.stack = err.stack;
    return this;
  },
  Error404: function Error404(msg) {
    //no encontrado
    var err = Error.apply(this, [msg]);
    this.name = err.name = "Error404";
    this.message = err.message;
    this.stack = err.stack;
    return this;
  },
  Error500: function Error500(msg) {
    //no encontrado
    var err = Error.apply(this, [msg]);
    this.name = err.name = "Error500";
    this.message = err.message;
    this.stack = err.stack;
    return this;
  },
  InfoError: function InfoError(msg) {
    //todo ok, solo información
    var err = Error.apply(this, [msg]);
    this.name = err.name = "InfoError";
    this.message = err.message;
    this.stack = err.stack;
    return this;
  }
};
var _default = errorTypes;
exports["default"] = _default;