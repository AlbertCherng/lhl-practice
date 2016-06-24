module.exports = {
  num: 123,
  hello: function () {
    console.log("Hello!")
  },
  callback: function(string) {
    text(string);
  }
};

var text = function(string){
  console.log("Callback " + string);
};
