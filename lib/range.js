"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = range;
function* range(...args) {
  var _ref = (() => {
    switch (args.length) {
      case 0:
        return [0, Infinity, 1];

      case 1:
        return [0, args[0], 1];

      case 2:
        return [args[0], args[1], 1];

      default:
        return args;
    }
  })(),
      _ref2 = _slicedToArray(_ref, 3);

  const start = _ref2[0],
        end = _ref2[1],
        step = _ref2[2];


  for (let x = start; x < end; x += step) {
    yield x;
  }
};