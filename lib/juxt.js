'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = juxt;

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

var _tee = require('./tee');

var _tee2 = _interopRequireDefault(_tee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function juxt(...fs) {
  return function (...args) {
    if (args.length === 1 && args[0][Symbol.iterator]) {
      return (0, _map2.default)((f, coll) => f(coll), fs, (0, _tee2.default)(fs.length, args[0][Symbol.iterator]()));
    }

    return (0, _map2.default)(f => f(...args), fs);
  };
}