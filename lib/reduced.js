'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduced;
function reduced(x) {
  return { '@@reducedValue': x };
}