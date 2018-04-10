'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = notEmpty;

var _tee3 = require('./tee');

var _tee4 = _interopRequireDefault(_tee3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function notEmpty(coll) {
  var _tee = (0, _tee4.default)(2, coll),
      _tee2 = _slicedToArray(_tee, 2);

  const iter1 = _tee2[0],
        iter2 = _tee2[1];


  if (iter1.next().done) {
    return null;
  }

  return iter2;
}