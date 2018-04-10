'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapIndexed;

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

var _range = require('./range');

var _range2 = _interopRequireDefault(_range);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapIndexed(f, coll) {
  return (0, _map2.default)(f, (0, _range2.default)(), coll);
}