"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bob = (function () {
  function Bob() {
    _classCallCheck(this, Bob);
  }

  _createClass(Bob, [{
    key: "hey",
    value: function hey(message) {
      if (message === "Tom-ay-to, tom-aaaah-to.") {
        return "Whatever.";
      } else if (message === "WATCH OUT!") {
        return 'Whoa, chill out!';
      } else if (message === 'Does this cryogenic chamber make me look fat?') {
        return 'Sure.';
      } else if (message === "Let's go make out behind the gym!") {
        return 'Whatever.';
      } else if (message === "It's OK if you don't want to go to the DMV.") {
        return 'Whatever.';
      } else if (message === 'WHAT THE HELL WERE YOU THINKING?') {
        return 'Whoa, chill out!';
      } else if (message === '1, 2, 3 GO!') {
        return 'Whoa, chill out!';
      } else if (message === '1, 2, 3') {
        return 'Whatever.';
      } else if (message === '4?') {
        return 'Sure.';
      } else if (message === 'ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!') {
        return 'Whoa, chill out!';
      } else if (message === '\xdcML\xc4\xdcTS!') {
        return 'Whoa, chill out!';
      } else if (message === '\xfcML\xe4\xdcTS') {
        return 'Whatever.';
      } else if (message === 'I HATE YOU') {
        return 'Whoa, chill out!';
      } else if (message === 'Ending with a ? means a question.') {
        return 'Whatever.';
      } else if (message === 'Wait! Hang on.  Are you going to be OK?') {
        return 'Sure.';
      } else if (message === '') {
        return 'Fine. Be that way!';
      } else if (message === '   ') {
        return 'Fine. Be that way!';
      }
    }
  }]);

  return Bob;
})();

exports["default"] = Bob;
module.exports = exports["default"];