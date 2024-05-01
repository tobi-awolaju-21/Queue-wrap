  //next page
  document.getElementById("newwrapButton").addEventListener("click", function() {
    // Add click animation class to the button
    this.classList.add("click-animation");

    // Redirect to home.html after the animation ends
    setTimeout(() => {
        window.location.href = "query.html";
    }, 300); // 0.3 seconds for the animation duration
});



    