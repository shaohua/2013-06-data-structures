describe("stack", function() {
  var stack;

  /* BEGIN DO NOT MODIFY */
  beforeEach(function() {
    // Before each test runs, create a new Stack
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      stack = makeStack();
    } else if (runner.is('src/prototypal')) {
      stack = Stack();
    } else if (runner.is('src/pseudoclassical')) {
      stack = new Stack();
    }
  });
  /* END DO NOT MODIFY */

  // the following test is for profiling only, hence commented out
  // it('we are going to test a whole bunch of queues!', function() {
  //   var result = [];
  //   for(var i = 0; i < 1000000; i++){
  //     result.push( new Stack() );
  //   }
  // });

  // Any stack implementation should have the following methods
  it('should have "push", "pop", and "size" methods', function() {
    expect(stack.push).to.be.a('function');
    expect(stack.pop).to.be.a('function');
    expect(stack.size).to.be.a('function');
  });

  it('should add pushed items to the top of the stack', function() {
    stack.push('Shao rocks!');
    expect(stack[0]).to.equal('Shao rocks!');
  });

  it('should remove popped items from the top of the stack', function() {
    stack.push('yay!');
    stack.push('boooo');
    stack.pop();
    expect(stack.size()).to.equal(1);
  });

  it('should push and pop multiple items in the right order (LIFO)', function() {
    stack.push('pop');
    stack.push('goes');
    stack.push('the weasel');
    expect(stack.pop()).to.equal('the weasel');
    expect(stack.pop()).to.equal('goes');
    expect(stack.pop()).to.equal('pop');
  });

  it('should not error when popping from an empty stack', function() {
    stack.push('something');
    stack.push('something else');
    stack.pop();
    stack.pop();
    expect(stack.pop()).to.equal(undefined);
  });

  it('should handle really complicated problems', function() {
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.pop();
    stack.push('d');
    stack.push('e');
    stack.pop();
    stack.push('f');
    expect(stack.pop()).to.equal('f');
    expect(stack.pop()).to.equal('d');
    expect(stack.pop()).to.equal('b');
  });

  // Hey! Add more tests here if you can think of ways to test your stack more thoroughly
});
