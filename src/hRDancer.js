var HRDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('hr');
};

HRDancer.prototype = Object.create(Dancer.prototype);
HRDancer.prototype.constructor = HRDancer;
HRDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle();
};