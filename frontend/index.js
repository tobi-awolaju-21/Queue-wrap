$(document).ready(function(){
    $(".container").on("swipeleft swiperight", function(event){
      event.preventDefault();
      var delta = event.type == "swipeleft" ? 300 : -300;
      var scrollLeft = $(this).scrollLeft();
      $(this).scrollLeft(scrollLeft + delta);
    });
  });
  


  

    // Get the container element
    const container = document.querySelector('.container');
    // Calculate the halfway point
    const halfway = container.scrollWidth / 4;
    // Scroll to halfway
    container.scrollLeft = halfway+8;

    