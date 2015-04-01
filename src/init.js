$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1500
    );

    // Appends the dancer "span" element to the DOM
    $('body').append(dancer.$node);

    // Pushes each dancer to the global "dancers" array
    window.dancers.push(dancer);
  });

  // Click handler that calls the lineUp method, which moves all dancers to the left
  $(".lineUpButton").on("click", function(event){
    // Iterates through each dancer in the global "dancers" array
    window.dancers.forEach(function(dancer){
      // Calls the lineUp method for each dancer
      dancer.lineUp();
    });
  });

  // Click handler that callsl theh breakLine method, which resets dancer positions
  $('.breakLineButton').on('click', function() {
    window.dancers.forEach(function(dancer) {
      // Calls the breakLine method for each dancer
      dancer.breakLine();
    });
  });

});

