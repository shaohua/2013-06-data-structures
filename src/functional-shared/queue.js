var _ = {};
_.extend = function(obj) {
  //obj is the same as args[0]
  var args = Array.prototype.slice.call(arguments);
  if(args.length === 1){
    return obj;
  }
  //only deal with more than one arguments
  for(var i=1;i<args.length;i++){
    for(var key in args[i]){
      obj[key] = args[i][key];
    }
  }
  return obj;
};

var makeQueue = function(){
// Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var queue = {};
  queue.howBig = 0;
  queue.head_key = 0;
  queue.back_key = 0;

  _.extend(queue, sharedObj);

  return queue;

};

var sharedObj = {};

sharedObj.enqueue = function(value){
  this.howBig += 1;
  this[this.back_key] = value;
  this.back_key += 1;
};

sharedObj.dequeue = function(){
  if(this.howBig > 0){
    this.howBig -= 1;

    var output = this[this.head_key]; //when head_key is 0 and queue is empty, this is undefined
    delete this[this.head_key];

    this.head_key += 1; //pointing head to the new key
    return output; //using the old key of the head
  } else {
    return undefined;
  }
};

sharedObj.size = function(){
  return this.howBig;
};