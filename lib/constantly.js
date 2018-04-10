"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = constantly;
function constantly(x) {
  return () => x;
}