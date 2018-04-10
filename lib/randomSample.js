'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = randomSample;

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function randomSample(prob, coll) {
  return (0, _filter2.default)(_ => Math.random() < prob, coll);
}