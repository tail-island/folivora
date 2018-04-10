'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = map;

var _some = require('./some');

var _some2 = _interopRequireDefault(_some);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function* map(f, ...colls) {
  const iters = colls.map(coll => coll[Symbol.iterator]());

  for (;;) {
    const nexts = iters.map(iter => iter.next());
    if (nexts.some(next => next.done)) {
      break;
    }

    yield f(...nexts.map(next => next.value));
  }
}