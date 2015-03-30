var HungryDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<div class="hungry-dancer"></div>');
  this.setPosition(top, left);
};

HungryDancer.prototype = Object.create(Dancer.prototype);
HungryDancer.prototype.constructor = HungryDancer;
HungryDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.slideToggle();
};


