"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require('dotenv').config();

var _default = {
  'port': process.env.PORT || 3500,
  'mongo_uri': process.env.MONGO_URI || "mongodb://localhost/crud-express-mongodb"
};
exports["default"] = _default;