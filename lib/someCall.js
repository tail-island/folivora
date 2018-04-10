'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = someCall;

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _reduced = require('./reduced');

var _reduced2 = _interopRequireDefault(_reduced);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function someCall(x, ...fs) {
  return (0, _reduce2.default)((acc, f) => {
    const nextAcc = f(acc);

    if (nextAcc === null || nextAcc === undefined) {
      return (0, _reduced2.default)(nextAcc);
    }

    return acc;
  }, x, fs);
}