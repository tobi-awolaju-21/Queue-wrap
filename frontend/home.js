  //next page
  document.getElementById("newwrapButton").addEventListener("click", function() {
    // Add click animation class to the button
    this.classList.add("click-animation");

    // Redirect to home.html after the animation ends
    setTimeout(() => {
        window.location.href = "query.html";
    }, 300); // 0.3 seconds for the animation duration
});



    // Retrieve the user object from localStorage
const currentUser = JSON.parse(localStorage.getItem('currentUser'));

// Check if currentUser exists
if (currentUser) {
    // Use currentUser as needed
    console.log(currentUser);
} else {
    // User not logged in
    console.log('No user logged in');
  

}


// Retrieve the user object from localStorage
const storedData = localStorage.getItem('currentUser');

if (storedData) {
    const parsedData = JSON.parse(storedData);
    const storedUser = parsedData.user;
    const storedTimestamp = parsedData.timestamp;

    const currentTime = new Date().getTime(); // Get current time in milliseconds
    const elapsedTime = (currentTime - storedTimestamp) / 1000; // Calculate elapsed time in seconds

    if (elapsedTime > 60) {
        console.log("Stored user object is more than 60 seconds old.");
        window.close();
        window.location.href = "index.html";
    } else {
        // User object is still valid, use it
        console.log(storedUser);
    }
} else {
    console.log("No user data stored in localStorage.");
    window.close();
    window.location.href = "index.html";
}
