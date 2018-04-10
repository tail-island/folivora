"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = next;
function next(coll) {
  const iter = coll[Symbol.iterator]();

  iter.next();

  return iter;
}