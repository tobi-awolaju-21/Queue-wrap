 // Get all buttons
 const buttons = document.querySelectorAll('.b2');

 // Random x translation
 buttons.forEach(button => {
     const randomX = Math.floor(Math.random() * 91) - 49; // Random value between -25 and 25
     button.style.transform = `translateX(${randomX}px)`;
 });


 
//next page
document.getElementById("play").addEventListener("click", function() {
    // Add click animation class to the button
    this.classList.add("click-animation");

    // Redirect to home.html after the animation ends
    setTimeout(() => {
        window.location.href = "wrap.html";
    }, 300); // 0.3 seconds for the animation duration
});



// Retrieve the user object from localStorage
const storedData = localStorage.getItem('currentUser');

if (storedData) {
    const parsedData = JSON.parse(storedData);
    const storedUser = parsedData.user;
    const storedTimestamp = parsedData.timestamp;

    const currentTime = new Date().getTime(); // Get current time in milliseconds
    const elapsedTime = (currentTime - storedTimestamp) / 1000; // Calculate elapsed time in seconds

    if (elapsedTime > 86400) {
        console.log("Stored user object is more than 24hrs  old.");
        window.location.href = "index.html";
    } else {
        // User object is still valid, use it
        console.log(storedUser);
    }
} else {
    console.log("No user data stored in localStorage.");
    window.location.href = "index.html";
}
