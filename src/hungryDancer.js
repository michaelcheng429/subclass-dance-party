var HungryDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('hungry');
};

HungryDancer.prototype = Object.create(Dancer.prototype);
HungryDancer.prototype.constructor = HungryDancer;
HungryDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.slideToggle();
  var self = this;
  this.$node.on("mouseover", function(){
    var styleSettings = {
      background: "#662234",
    };
    self.$node.css(styleSettings);
  });
};


