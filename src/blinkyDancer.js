var BlinkyDancer = function(top, left, timeBetweenSteps){
  // Makes BlinkyDancer an instance of the Dancer superclass with same properties
  Dancer.call(this, top, left, timeBetweenSteps);
};

// Import the methods of the Dancer superclass
BlinkyDancer.prototype = Object.create(Dancer.prototype);

// Reset the constructor to of BlinkyDancer to BlinkyDancer
BlinkyDancer.prototype.constructor = BlinkyDancer;

// Call the Dancer step method, which repeatedly calls the step method
BlinkyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  // Makes BlinkyDancer "blink" on and off
  this.$node.toggle();

  // Generates random number between 0 and 255
  var randColor = function(){
    return Math.floor(Math.random() * 256);
  };

  // New CSS background color
  var styleSettings = {border: "10px solid rgb(" + randColor() + ',' + randColor() + ',' + randColor() + ')'};

  // Sets new CSS background color for this.$node
  this.$node.css(styleSettings);
};


/*
var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};
*/