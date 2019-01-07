    var animals = ["Dog", "Cat", "Tiger", "Lion", "Bear", "Salamander", "Turtle", "Whale", "Shark", "Unicorn", "Chipmunk", "Elephant"]
    function renderButtons() {
        $("#buttons-view").empty();
        // Loops through the array of movies
        for (var i = 0; i < animals.length; i++) {
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var newBut = $("<button>");
          // Adds a class of movie to our button
          newBut.addClass("animal");
          // Added a data-attribute
          newBut.attr("data-name", animals[i]);
          // Provided the initial button text
          newBut.text(animals[i]);
          // Added the button to the buttons-view div
          $("#buttons-view").append(newBut);
        }
      }
    renderButtons()
