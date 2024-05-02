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
    window.close();
    window.location.href = "index.html";

}