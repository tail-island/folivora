"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = complement;
function complement(f) {
  return (...args) => !f(...args);
}