var DuckDancer = function(top, left, timeBetweenSteps){
  HRDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('duck');
  this.$node.removeClass('hr');
  
};

DuckDancer.prototype = Object.create(HRDancer.prototype);
DuckDancer.prototype.constructor = DuckDancer;
DuckDancer.prototype.step = function(){
  HRDancer.prototype.step.call(this);
};