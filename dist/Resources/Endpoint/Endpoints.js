"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ModelEndpoint = _interopRequireDefault(require("./ModelEndpoint"));

var Enpoints = /*#__PURE__*/function () {
  function Enpoints() {
    (0, _classCallCheck2["default"])(this, Enpoints);
  }

  (0, _createClass2["default"])(Enpoints, [{
    key: "consultar",
    value: function () {
      var _consultar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                _ModelEndpoint["default"].find(function (err, endpoints) {
                  if (err) return res.json({
                    success: false,
                    msg: err
                  });
                  return res.json({
                    success: true,
                    data: endpoints
                  });
                });

                _context.next = 7;
                break;

              case 4:
                _context.prev = 4;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.json({
                  success: false,
                  msg: _context.t0
                }));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 4]]);
      }));

      function consultar(_x, _x2) {
        return _consultar.apply(this, arguments);
      }

      return consultar;
    }()
  }, {
    key: "consultarId",
    value: function () {
      var _consultarId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                _ModelEndpoint["default"].findById(req.params.id, function (err, endpoint) {
                  if (err) {
                    return res.json({
                      success: false,
                      msg: err
                    });
                  }

                  ;
                  return res.json({
                    success: true,
                    data: endpoint
                  });
                });

                _context2.next = 7;
                break;

              case 4:
                _context2.prev = 4;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.json({
                  success: false,
                  msg: _context2.t0
                }));

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 4]]);
      }));

      function consultarId(_x3, _x4) {
        return _consultarId.apply(this, arguments);
      }

      return consultarId;
    }()
  }, {
    key: "crear",
    value: function () {
      var _crear = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var _req$body, name, dni, email, cellPhone, endpoint, save;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _req$body = req.body, name = _req$body.name, dni = _req$body.dni, email = _req$body.email, cellPhone = _req$body.cellPhone;

                if (name) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", res.status(400).json({
                  msg: "Nombre es requerido",
                  success: false
                }));

              case 4:
                if (dni) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", res.status(400).json({
                  msg: "Dni es requerido",
                  success: false
                }));

              case 6:
                if (email) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt("return", res.status(400).json({
                  msg: "Email es requerido",
                  success: false
                }));

              case 8:
                if (cellPhone) {
                  _context3.next = 10;
                  break;
                }

                return _context3.abrupt("return", res.status(400).json({
                  msg: "Telefono es requerido",
                  success: false
                }));

              case 10:
                endpoint = new _ModelEndpoint["default"]({
                  name: name,
                  email: email,
                  cellPhone: cellPhone,
                  dni: dni
                });
                _context3.next = 13;
                return endpoint.save();

              case 13:
                save = _context3.sent;
                res.status(200).json({
                  success: true,
                  data: save
                });
                _context3.next = 20;
                break;

              case 17:
                _context3.prev = 17;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", res.json({
                  success: false,
                  error: _context3.t0
                }));

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 17]]);
      }));

      function crear(_x5, _x6) {
        return _crear.apply(this, arguments);
      }

      return crear;
    }()
  }, {
    key: "editar",
    value: function () {
      var _editar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var _req$body2, id, name, dni, email, cellPhone;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _req$body2 = req.body, id = _req$body2.id, name = _req$body2.name, dni = _req$body2.dni, email = _req$body2.email, cellPhone = _req$body2.cellPhone;

                if (id) {
                  _context4.next = 4;
                  break;
                }

                return _context4.abrupt("return", res.status(400).json({
                  msg: "Id es requerido",
                  success: false
                }));

              case 4:
                if (name) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return", res.status(400).json({
                  msg: "Nombre es requerido",
                  success: false
                }));

              case 6:
                if (dni) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return", res.status(400).json({
                  msg: "Dni es requerido",
                  success: false
                }));

              case 8:
                if (email) {
                  _context4.next = 10;
                  break;
                }

                return _context4.abrupt("return", res.status(400).json({
                  msg: "Email es requerido",
                  success: false
                }));

              case 10:
                if (cellPhone) {
                  _context4.next = 12;
                  break;
                }

                return _context4.abrupt("return", res.status(400).json({
                  msg: "Telefono es requerido",
                  success: false
                }));

              case 12:
                console.log('id');
                console.log(id);
                console.log('id');

                _ModelEndpoint["default"].findById(id, function (err, endpoint) {
                  if (err) return res.json({
                    success: false,
                    msg: err
                  });
                  console.log(endpoint);

                  if (endpoint) {
                    endpoint.name = name;
                    endpoint.email = email;
                    endpoint.cellPhone = cellPhone;
                    endpoint.dni = dni;
                    endpoint.save(function (err, endpointEdit) {
                      if (err) return res.json({
                        success: false,
                        msg: err
                      });
                      ;
                      return res.json({
                        success: true,
                        data: endpointEdit
                      });
                    });
                  } else {
                    return res.json({
                      success: false,
                      msg: "id: " + id + " no encontrado"
                    });
                  }
                });

                _context4.next = 21;
                break;

              case 18:
                _context4.prev = 18;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", res.json({
                  success: false,
                  msg: _context4.t0
                }));

              case 21:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 18]]);
      }));

      function editar(_x7, _x8) {
        return _editar.apply(this, arguments);
      }

      return editar;
    }()
  }, {
    key: "eliminar",
    value: function () {
      var _eliminar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var id;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                id = req.body.id;

                _ModelEndpoint["default"].findById(id, function (err, endpoint) {
                  if (err) {
                    throw new error_types.InfoError(err);
                  }

                  ;

                  if (endpoint) {
                    endpoint["delete"](function (err, endpoint) {
                      if (err) return res.json({
                        success: false,
                        msg: err
                      });
                      return res.json({
                        success: true,
                        data: endpoint
                      });
                    });
                  } else {
                    return res.json({
                      success: false,
                      msg: "id: " + id + " no encontrado"
                    });
                  }
                });

                _context5.next = 8;
                break;

              case 5:
                _context5.prev = 5;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", res.json({
                  success: false,
                  msg: _context5.t0
                }));

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 5]]);
      }));

      function eliminar(_x9, _x10) {
        return _eliminar.apply(this, arguments);
      }

      return eliminar;
    }()
  }]);
  return Enpoints;
}();

var _default = new Enpoints();

exports["default"] = _default;