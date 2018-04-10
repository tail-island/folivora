'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rseq;

var _condCall = require('./condCall');

var _condCall2 = _interopRequireDefault(_condCall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function* rseq(coll) {
  if (!Array.isArray(coll)) {
    throw 'Invalid arguments';
  }

  for (let i = coll.length - 1; i >= 0; --i) {
    yield coll[i];
  }
}