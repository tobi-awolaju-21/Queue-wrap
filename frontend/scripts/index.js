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

    
    
// Retrieve the user object from localStorage
const storedData = localStorage.getItem('currentUser');

if (storedData) {
    const parsedData = JSON.parse(storedData);
    const storedUser = parsedData.user;
    const storedTimestamp = parsedData.timestamp;

    const currentTime = new Date().getTime(); // Get current time in milliseconds
    const elapsedTime = (currentTime - storedTimestamp) / 1000; // Calculate elapsed time in seconds

    if (elapsedTime > 10) {
        console.log("Stored user object is more than 10 seconds old.");
      
    } else {
        // User object is still valid, use it
        console.log(storedUser);
        window.location.href = "home.html";
    }
} else {
    console.log("No user data stored in localStorage.");
  
}





//random color
// Select the element with the class .block1
const body = document.querySelector('body');

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Set a random background color to the element
body.style.backgroundColor = getRandomColor();

