'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = reduce;

var _cons = require('./cons');

var _cons2 = _interopRequireDefault(_cons);

var _first = require('./first');

var _first2 = _interopRequireDefault(_first);

var _juxt = require('./juxt');

var _juxt2 = _interopRequireDefault(_juxt);

var _next = require('./next');

var _next2 = _interopRequireDefault(_next);

var _tee = require('./tee');

var _tee2 = _interopRequireDefault(_tee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reduce(...args) {
  var _ref = (() => {
    switch (args.length) {
      case 0:
        throw 'Invalid arguments';

      case 1:
        throw 'Invalid arguments';

      case 2:
        return (0, _cons2.default)(args[0], (0, _juxt2.default)(_first2.default, _next2.default)(args[1]));

      default:
        return args;
    }
  })(),
      _ref2 = _slicedToArray(_ref, 3);

  const f = _ref2[0],
        val = _ref2[1],
        coll = _ref2[2];


  let acc = val;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = coll[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      const x = _step.value;

      acc = f(acc, x);

      if (acc.hasOwnProperty('@@reducedValue')) {
        acc = acc['@@reducedValue'];
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return acc;
}