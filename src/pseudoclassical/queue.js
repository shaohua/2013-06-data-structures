var Queue = function() {
  this.howBig = 0;
  this.head_key = 0;
  this.back_key = 0;
};

Queue.prototype.enqueue = function(value){
  this.howBig += 1;
  this[this.back_key] = value;
  this.back_key += 1;
};

Queue.prototype.dequeue = function(){
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

Queue.prototype.size = function(){
  return this.howBig;
};
