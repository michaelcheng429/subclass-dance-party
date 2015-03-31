describe("hRDancer", function() {

  var hRDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    // TODO
    hRDancer = new HungryDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(hRDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node slide up and down", function() {
    sinon.spy(hRDancer.$node, 'slideToggle');
    hRDancer.step();
    expect(hRDancer.$node.slideToggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(hRDancer, "step");
      expect(hRDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(hRDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(hRDancer.step.callCount).to.be.equal(2);
    });
  });
});
