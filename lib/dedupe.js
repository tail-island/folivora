'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = dedupe;

var _apply = require('./apply');

var _apply2 = _interopRequireDefault(_apply);

var _cons = require('./cons');

var _cons2 = _interopRequireDefault(_cons);

var _first = require('./first');

var _first2 = _interopRequireDefault(_first);

var _identity = require('./identity');

var _identity2 = _interopRequireDefault(_identity);

var _juxt = require('./juxt');

var _juxt2 = _interopRequireDefault(_juxt);

var _keep = require('./keep');

var _keep2 = _interopRequireDefault(_keep);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

var _next = require('./next');

var _next2 = _interopRequireDefault(_next);

var _tee3 = require('./tee');

var _tee4 = _interopRequireDefault(_tee3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dedupe(coll) {
  var _tee = (0, _tee4.default)(2, coll),
      _tee2 = _slicedToArray(_tee, 2);

  const coll1 = _tee2[0],
        coll2 = _tee2[1];


  return (0, _cons2.default)((0, _first2.default)(coll1), (0, _keep2.default)(_identity2.default, (0, _apply2.default)(_map2.default, (prev, x) => x !== prev ? x : null)((0, _juxt2.default)(_identity2.default, _next2.default)(coll2))));
}