$(document).ready(function(){
    $(".container").on("swipeleft swiperight", function(event){
      event.preventDefault();
      var delta = event.type == "swipeleft" ? 300 : -300;
      var scrollLeft = $(this).scrollLeft();
      $(this).scrollLeft(scrollLeft + delta);
    });
  });
  


  //next page
  document.getElementById("getStartedButton").addEventListener("click", function() {
    // Add click animation class to the button
    this.classList.add("click-animation");

    // Redirect to home.html after the animation ends
    setTimeout(() => {
        window.location.href = "home.html";
    }, 300); // 0.3 seconds for the animation duration
});

    // Get the container element
    const container = document.querySelector('.container');
    // Calculate the halfway point
    const halfway = container.scrollWidth / 4;
    // Scroll to halfway
    container.scrollLeft = halfway+16;

    