var _ = {};
_.extend = function(obj) {

  var args = Array.prototype.slice.call(arguments);
  if(args.length === 1){
    return obj;
  }

  for(var i=1;i<args.length;i++){
    for(var key in args[i]){
      obj[key] = args[i][key];
    }
  }
  return obj;
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

var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var stack = {};

  stack.howBig = 0;

  _.extend(stack, sharedObj1);

  return stack;

};