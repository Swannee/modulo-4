(function (window) {
  var HelloSpeaker = {};
  var greeting = "Hello ";
  HelloSpeaker.speak = function (name) {
    console.log(greeting + name);
  }
  window.HelloSpeaker = HelloSpeaker;
})(window);
