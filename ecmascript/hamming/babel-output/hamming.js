"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var counter = 0;

var Hamming = (function () {
  function Hamming() {
    _classCallCheck(this, Hamming);
  }

  _createClass(Hamming, [{
    key: "compute",
    value: function compute(inputA, inputB) {
      if (inputA.length !== inputB.length) {
        throw new Error("DNA strands must be of equal length.");
      }
      var counter = 0;
      for (var i = 0; i < inputA.length; i++) {
        if (inputA[i] !== inputB[i]) {
          counter++;
        }
      }

      //  console.log("\n"+counter)
      return counter;
    }
  }]);

  return Hamming;
})();

module.exports = Hamming;