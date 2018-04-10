'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = comp;

var _pipe = require('./pipe');

var _pipe2 = _interopRequireDefault(_pipe);

var _reverse = require('./reverse');

var _reverse2 = _interopRequireDefault(_reverse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function comp(...fs) {
  return (0, _pipe2.default)(...(0, _reverse2.default)(fs));
}