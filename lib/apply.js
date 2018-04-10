"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = apply;
function apply(f, ...args) {
  return moreArgs => {
    return f(...args, ...moreArgs);
  };
}