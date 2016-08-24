"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transcriptor = (function () {
  function Transcriptor() {
    _classCallCheck(this, Transcriptor);
  }

  _createClass(Transcriptor, [{
    key: "toRna",
    value: function toRna(input) {
      var newString = "";
      var Arr = [];
      for (var i = 0; i < input.length; i++) {
        if (input.length === 1) {
          if (input[i] === "C") {
            return "G";
          } else if (input[i] === "G") {
            return "C";
          } else if (input[i] === "A") {
            return "U";
          } else if (input[i] === "T") {
            return "A";
          }
        } else {
          if (input[i] === "C") {
            Arr.push("G");
          } else if (input[i] === "G") {
            Arr.push("C");
          } else if (input[i] === "A") {
            Arr.push("U");
          } else if (input[i] === "T") {
            Arr.push("A");
          }
        }
      }
      newString = Arr.join("");
      return newString;
    }
  }]);

  return Transcriptor;
})();

module.exports = Transcriptor;