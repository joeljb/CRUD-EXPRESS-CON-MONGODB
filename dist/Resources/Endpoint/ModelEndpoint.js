"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;

_mongoose["default"].set('useCreateIndex', true);

var EndpointSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cellPhone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  dni: {
    type: String,
    required: true
  }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

var _default = _mongoose["default"].model('endpoints', EndpointSchema);

exports["default"] = _default;