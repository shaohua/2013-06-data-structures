var makeQueue = function(){
// Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here

  var head_key = 0;
  var back_key = 0;

  // Implement the methods below
  var queue = {};

  queue.enqueue = function(value){
    size += 1;
    queue[back_key] = value;
    back_key += 1;
  };

  queue.dequeue = function(){
    if(size > 0){
      size -= 1;

      var output = queue[head_key]; //when head_key is 0 and queue is empty, this is undefined
      delete queue[head_key];

      head_key += 1; //pointing head to the new key
      return output; //using the old key of the head
    } else {
      return undefined;
    }
  };

  queue.size = function(){
    return size;
  };

  return queue;
  
};
