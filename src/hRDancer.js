var HRDancer = function(top, left, timeBetweenSteps){
  // Makes HRDancer an instance of the Dancer superclass with same properties
  Dancer.call(this, top, left, timeBetweenSteps);

  // Adds "hr" class to HRDancer, which allows additional styling
  this.$node.addClass('hr');
};

// Import the methods of the Dancer superclass
HRDancer.prototype = Object.create(Dancer.prototype);

// Reset the constructor to of HRDancer to HRDancer
HRDancer.prototype.constructor = HRDancer;

// Call the Dancer step method, which repeatedly calls the step method
HRDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  // Creates random y and x coordinates
  var randY = $("body").height() / 3 * (2 * Math.random() - 1);
  var randX = $("body").width() / 3 * (2 * Math.random() - 1);

  // Changes HRDancer's position with animate transition (in style.css)
  setTimeout(function(){

    // HRDancer's current x and y coordinates
    var currentY = this.$node.position().top;
    var currentX = this.$node.position().left;

    // Calls the Dancer superclass setPosition method with new x and y coordinates
    Dancer.prototype.setPosition.call(this, currentY + randY, currentX + randX);

  }.bind(this), 0);

  // X and Y coordinates for center of HRDancer
  var $nodeNewX = this.$node.position().left + 50;
  var $nodeNewY = this.$node.position().top + 50;

  // Iterates through each dancer in the global "dancers" array
  window.dancers.forEach(function(dancer) {
    var dancerNewX = dancer.$node.position().left + 50;
    var dancerNewY = dancer.$node.position().top + 50;

    var dist = Math.sqrt(Math.pow(($nodeNewX - dancerNewX), 2) + Math.pow(($nodeNewY - dancerNewY),2));
    
    var dancerCollision = dist !== 0 && dist <= 100;
    var wallCollision = (dancerNewX - 50 <= 0) || (dancerNewX + 50 >= $("body").width()) ||
        (dancerNewY - 50 <= 0) || (dancerNewY + 50 >= $("body").height());
    
    if (dancerCollision){
        $('.collision-sound').attr('src', 'boing.mp3');
        randY = -4 * randY;
        randX = -4 * randX;
    }
    if (wallCollision){ // TODO: 
      dancer.setPosition(Math.random() * $("body").height(), Math.random() * $("body").width());
    }
  });
};