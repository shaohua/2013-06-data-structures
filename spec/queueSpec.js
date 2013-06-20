describe("queue", function() {
  var queue;

  /* BEGIN DO NOT MODIFY */
  beforeEach(function() {
    // Before each test runs, create a new Queue
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      queue = makeQueue();
    } else if (runner.is('src/prototypal')) {
      queue = Queue();
    } else if (runner.is('src/pseudoclassical')) {
      queue = new Queue();
    }
  });
  /* END DO NOT MODIFY */

  // the following test is for profiling only, hence commented out
  // Any queue implementation should have the following methods
  // it('we are going to test a whole bunch of queues!', function() {
  //   var result = [];
  //   for(var i = 0; i < 1000000; i++){
  //     result.push( makeQueue() );
  //   }
  // });

  it('should have "enqueue", "dequeue", and "size" methods', function() {
    expect(queue.enqueue).to.be.a('function');
    expect(queue.dequeue).to.be.a('function');
    expect(queue.size).to.be.a('function');
  });

  it('should take a value at location zero ', function() {
    queue.enqueue('barrr');
    expect(queue[0]).to.equal('barrr');
  });

  it('should remove a value', function() {
    queue.enqueue('bar');
    expect( queue.dequeue() ).to.equal('bar');
  });

  it('should have the correct size after several operations', function() {
    queue.enqueue('bar1');
    queue.enqueue('bar2');
    expect( queue.size() ).to.equal(2);
    queue.dequeue();
    expect( queue.size() ).to.equal(1);
    queue.dequeue();
    expect( queue.size() ).to.equal(0);
  });

  it('should delete the enqueued item ', function() {
    queue.enqueue('bar');
    queue.dequeue();
    expect( queue[0] ).to.equal(undefined);
  });

  it('should handle dequeueing from an empty queue', function() {
    queue.enqueue('bar');
    queue.dequeue();
    expect( queue.dequeue() ).to.equal(undefined);
  });

  it('should handle dequeue multiple times ', function() {
    queue.enqueue('bar');
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.enqueue('bar');
    expect( queue.size() ).to.equal(1);
    // expect( queue[-2] ).to.equal('bar');
  });

  it('should handle reaaaaally complicated queue activity', function() {
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    queue.dequeue();
    queue.enqueue('d');
    queue.enqueue('e');
    queue.dequeue();
    queue.enqueue('f');
    expect(queue.dequeue()).to.equal('c');
    expect(queue.dequeue()).to.equal('d');
    expect(queue.dequeue()).to.equal('e');
  });


  // Hey! Add tests here that thoroughly test the functionality of your queue

});
