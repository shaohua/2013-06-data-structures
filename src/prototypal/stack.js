var Stack = function() {
  var stack = Object.create(sharedObjForStack);
  stack.howBig = 0;
  return stack;
};

var sharedObjForStack = {};

sharedObjForStack.push = function(value){
  this[this.howBig] = value;
  this.howBig += 1;
};

sharedObjForStack.pop = function(){
  if(this.howBig >= 0) {
    this.howBig -= 1;
    var temp = this[this.howBig];
    delete this[this.howBig];
    return temp;
  } else {
    return undefined;
  }
};

sharedObjForStack.size = function(){
  return this.howBig;
};