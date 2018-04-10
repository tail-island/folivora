'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keepIndexed;

var _apply = require('./apply');

var _apply2 = _interopRequireDefault(_apply);

var _keep = require('./keep');

var _keep2 = _interopRequireDefault(_keep);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

var _range = require('./range');

var _range2 = _interopRequireDefault(_range);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function keepIndexed(f, coll) {
  return (0, _keep2.default)((0, _apply2.default)(f), (0, _map2.default)((i, x) => [i, x], (0, _range2.default)(), coll));
}