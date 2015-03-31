var HungryDancer = function(top, left, timeBetweenSteps){
  // Makes HungryDancer an instance of the Dancer superclass with same properties
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('hungry');
};

// Import the methods of the Dancer superclass
HungryDancer.prototype = Object.create(Dancer.prototype);

// Reset the constructor to of HungryDancer to HungryDancer
HungryDancer.prototype.constructor = HungryDancer;

// Call the Dancer step method, which repeatedly calls the step method
HungryDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  // Makes the HungryDancer "mouth" open and close
  this.$node.slideToggle();

  // On mouseover, change the HungryDancer background color
  var self = this;
  this.$node.on("mouseover", function(){
    var styleSettings = {
      background: "#662234",
    };
    self.$node.css(styleSettings);
  });
};


