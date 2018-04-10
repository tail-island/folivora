'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapcat;

var _apply = require('./apply');

var _apply2 = _interopRequireDefault(_apply);

var _concat = require('./concat');

var _concat2 = _interopRequireDefault(_concat);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapcat(f, ...colls) {
  return (0, _apply2.default)(_concat2.default)((0, _map2.default)(f, ...colls));
}