var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0;

  // Implement the methods below
  var stack = {};

  stack.push = function(value){
    stack[size] = value;
    size += 1;
  };

  stack.pop = function(){
    var temp = stack[size];
    delete stack[size];
    size -= 1;
    return temp;
  };

  stack.size = function(){
    return size;
  };

  return stack;
};
