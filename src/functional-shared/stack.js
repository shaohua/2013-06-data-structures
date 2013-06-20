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

var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var stack = {};

  stack.howBig = 0;

  _.extend(stack, sharedObjForStack);

  return stack;

};