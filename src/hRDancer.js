var HRDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('hr');
};

HRDancer.prototype = Object.create(Dancer.prototype);
HRDancer.prototype.constructor = HRDancer;
HRDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  var randY = $("body").height() / 5 * (2 * Math.random() - 1);
  var randX = $("body").width() / 5 * (2 * Math.random() - 1);


  setTimeout(function(){
    Dancer.prototype.setPosition.call(this, this.$node.position().top + randY,
    this.$node.position().left +  randX);
  }.bind(this), 50);

  var $nodeNewX = this.$node.position().left + 50;
  var $nodeNewY = this.$node.position().top + 50;
  window.dancers.forEach(function(dancer) {
    var dancerNewX = dancer.$node.position().left + 50;
    var dancerNewY = dancer.$node.position().top + 50;

    var dist = Math.sqrt(Math.pow(($nodeNewX - dancerNewX), 2) + Math.pow(($nodeNewY - dancerNewY),2));
    if (dist !== 0 && dist <= 100){
      $('.collision-sound').attr('src', 'boing.mp3');
    }

    // dist = sqrt( (x1 - x2)^2 + (y1 - y2)^2  )
    // x1 and y1 will be from this.$node.position() shifted by 50 in each dir
    // x2 and y2 will be from dancers array shifted by 50 in each dir
    // if dist === 0, then no collision detection
    // if dist <= 100, then collision (console log at first)


  });
};

// bill

  // var randY = $("body").height() / 10 * Math.random();
  // var randX = $("body").width() / 10 * Math.random(); 


  // setTimeout(function(){
  //   Dancer.prototype.setPosition.call(this, this.$node.position().top + randY,
  //   this.$node.position().left +  randX);
  // }.bind(this), 1000);

  // michael

  // setTimeout(function(){
  //   console.log(this.$node.position().top);
  //   debugger;
  //   Dancer.prototype.setPosition.call(this, randY, randX);
  // }.bind(this), 1000);