// Refactor from functional to pseudoclassical

var Dancer = function(top, left, timeBetweenSteps){

  // Time interval for how often the step method is called
  this.timeBetweenSteps = timeBetweenSteps;
  // Creates a node that is injected into the DOM with setPosition()
  this.$node = $('<span class="dancer"></span>');

  // Initializes the step method
  this.step();
  // Sets the position of this.$node
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  // Calls step method repeated after random interval of time
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // CSS format for top and left values of this.$node
  var styleSettings = {
    top: top,
    left: left
  };
  // Sets the CSS properties of this.$node to styleSettings
  this.$node.css(styleSettings);
};

// Moves all dancers to the left of the screen
Dancer.prototype.lineUp = function(){
  // CSS format for moving this.$node to the left of the screen
  var styleSettings = {
    left: 0,
  };
  // Sets the CSS property of this.$node to styleSettings
  this.$node.css(styleSettings);
};



//======== Old functional code ===========
// Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps){

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');


//   dancer.step = function(){
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left){
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };