"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = partial;
function partial(f, ...args) {
  return (...moreArgs) => f(...args, ...moreArgs);
}