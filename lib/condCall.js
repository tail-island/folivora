'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = condCall;

var _partition = require('./partition');

var _partition2 = _interopRequireDefault(_partition);

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function condCall(x, ...clauses) {
  return (0, _reduce2.default)((acc, [test, f]) => test ? f(acc) : acc, x, (0, _partition2.default)(2, clauses));
}