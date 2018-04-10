'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = someFn;

var _some = require('./some');

var _some2 = _interopRequireDefault(_some);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function someFn(...fs) {
  return (...args) => (0, _some2.default)(f => f(...args), fs);
}