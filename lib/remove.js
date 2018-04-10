'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = remove;

var _complement = require('./complement');

var _complement2 = _interopRequireDefault(_complement);

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function remove(pred, coll) {
  return (0, _filter2.default)((0, _complement2.default)(pred), coll);
}