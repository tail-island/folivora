'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = call;

var _pipe = require('./pipe');

var _pipe2 = _interopRequireDefault(_pipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function call(x, ...fs) {
  return (0, _pipe2.default)(...fs)(x);
}