"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = first;
function first(coll) {
  return coll[Symbol.iterator]().next().value;
}