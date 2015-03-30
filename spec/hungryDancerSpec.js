describe("hungryDancer", function() {

  var hungryDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    hungryDancer = new HungryDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(hungryDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node slide up and down", function() {
    sinon.spy(hungryDancer.$node, 'slideToggle');
    hungryDancer.step();
    expect(hungryDancer.$node.slideToggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(hungryDancer, "step");
      expect(hungryDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(hungryDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(hungryDancer.step.callCount).to.be.equal(2);
    });
  });
});
