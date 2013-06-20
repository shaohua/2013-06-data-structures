var Stack = function() {
  var stack = Object.create(sharedObj1);
  stack.howBig = 0;
  return stack;
};

var sharedObj1 = {};

sharedObj1.push = function(value){
  this[this.howBig] = value;
  this.howBig += 1;
};

sharedObj1.pop = function(){
  if(this.howBig >= 0) {
    this.howBig -= 1;
    var temp = this[this.howBig];
    delete this[this.howBig];
    return temp;
  } else {
    return undefined;
  }
};

sharedObj1.size = function(){
  return this.howBig;
};