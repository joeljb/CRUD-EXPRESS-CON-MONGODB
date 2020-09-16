"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require('dotenv').config();

console.log('process.env.MONGO_URI');
console.log(process.env.MONGO_URI);
console.log('process.env.MONGO_URI');
var _default = {
  'port': process.env.PORT || 3500,
  'mongo_uri': process.env.MONGO_URI || "mongodb://localhost:27017/endpoints"
};
exports["default"] = _default;