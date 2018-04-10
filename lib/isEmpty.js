"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmpty;
function isEmpty(coll) {
  if (coll[Symbol.iterator]().next().done) {
    return true;
  }

  return false;
}