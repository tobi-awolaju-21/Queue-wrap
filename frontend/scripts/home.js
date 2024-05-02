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

    if (elapsedTime > 86400) {
        console.log("Stored user object is more than 24hrs  old.");
        window.location.href = "index.html";
    } else {










        const userData = storedUser;
        // User object is still valid, use it
        console.log(storedUser);


        const username = userData.displayName;
        const email = userData.email;
        const photoURL = userData.photoURL;
         
        
// Update username
document.getElementById("username").innerText = username;

// Update profile picture
const img = document.getElementById("pfp");
img.src = photoURL;

//make funkie art 
// Create an image object
const img = new Image();
img.src = document.getElementById('pfp').src;

// When the image is loaded
img.onload = function() {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    // Get 2D context
    const ctx = canvas.getContext('2d');

    // Draw the image onto the canvas
    ctx.drawImage(img, 0, 0);

    // Get the image data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Count occurrences of each color
    const colorCounts = {};
    for (let i = 0; i < data.length; i += 4) {
        const color = `rgb(${data[i]}, ${data[i + 1]}, ${data[i + 2]})`;
        colorCounts[color] = (colorCounts[color] || 0) + 1;
    }

    // Find the most used color
    let mostUsedColor;
    let maxCount = 0;
    for (const color in colorCounts) {
        if (colorCounts[color] > maxCount) {
            maxCount = colorCounts[color];
            mostUsedColor = color;
        }
    }

    // Output the most used color
    console.log('Most used color:', mostUsedColor);

    // Get the .block1 element
    const block1 = document.querySelector('.block1');

    // Set the background color of .block1 to the most used color
    block1.style.backgroundColor = mostUsedColor;
};



console.log("Username:", username);
console.log("Email:", email);
console.log("photoURL:", photoURL);
















    }
} else {
    console.log("No user data stored in localStorage.");
    window.location.href = "index.html";
}



