'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tee;

var _count = require('./count');

var _count2 = _interopRequireDefault(_count);

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

var _range = require('./range');

var _range2 = _interopRequireDefault(_range);

var _repeat = require('./repeat');

var _repeat2 = _interopRequireDefault(_repeat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tee(n, coll) {
  const iter = coll[Symbol.iterator]();

  const queue = [];
  const cupPositions = Array.from((0, _repeat2.default)(n, 0));

  return (0, _map2.default)(function* (i) {
    for (;;) {
      const maxPosition = Math.max(...cupPositions);
      const minPosition = Math.min(...cupPositions);

      if (cupPositions[i] === maxPosition) {
        queue.push(iter.next());
      }

      const next = queue[cupPositions[i] - minPosition];
      if (next.done) {
        break;
      }

      if (cupPositions[i] === minPosition && (0, _count2.default)((0, _filter2.default)(position => position === minPosition, cupPositions)) == 1) {
        queue.shift();
      }

      cupPositions[i]++;

      yield next.value;
    }
  }, (0, _range2.default)(n));
}