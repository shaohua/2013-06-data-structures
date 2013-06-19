var sharedObj = {};

sharedObj.push = function(value){
  this[howBig] = value;
  howBig += 1;
};

sharedObj.pop = function(){
  if(howBig >= 0) {
    howBig -= 1;
    var temp = this[howBig];
    delete this[howBig];
    return temp;
  } else {
    return undefined;
  }
};

sharedObj.size = function(){
  return howBig;
};

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

var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var howBig = 0;

  // Implement the methods below
  var stack = {};

  _.extend(stack, sharedObj);

  return stack;

};