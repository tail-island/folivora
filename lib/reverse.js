"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reverse;
function reverse(coll) {
  return Array.from(coll).reverse()[Symbol.iterator]();
}