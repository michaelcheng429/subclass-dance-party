var HRDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('hr');
};

HRDancer.prototype = Object.create(Dancer.prototype);
HRDancer.prototype.constructor = HRDancer;
HRDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle();
  var randY = $("body").height() * Math.random();
  var randX = $("body").width() * Math.random(); 


  setTimeout(function(){
    Dancer.prototype.setPosition.call(this, randY, randX);
  }.bind(this), 1000);
};

// var randY = $("body").height() / 10 * Math.random();
//   var randX = $("body").width() / 10 * Math.random(); 


//   setTimeout(function(){
//     Dancer.prototype.setPosition.call(this, this.position().top + randY,
//     this.position().left +  randX);
//   }.bind(this), 1000);