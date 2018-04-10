'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = everyPred;

var _every = require('./every');

var _every2 = _interopRequireDefault(_every);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function everyPred(...fs) {
  return (...args) => (0, _every2.default)(f => f(...args), fs);
}