"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = iterate;
function* iterate(f, x) {
  yield x;

  for (;;) {
    x = f(x);

    yield x;
  }
}