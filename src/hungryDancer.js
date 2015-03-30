var HungryDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('hungry');
};

HungryDancer.prototype = Object.create(Dancer.prototype);
HungryDancer.prototype.constructor = HungryDancer;
HungryDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.slideToggle();
};


