var Stack = function() {
  this.howBig = 0;
};

Stack.prototype.push = function(value){
  this[this.howBig] = value;
  this.howBig += 1;
};

Stack.prototype.pop = function(){
  if(this.howBig >= 0) {
    this.howBig -= 1;
    var temp = this[this.howBig];
    delete this[this.howBig];
    return temp;
  } else {
    return undefined;
  }
};

Stack.prototype.size = function(){
  return this.howBig;
};