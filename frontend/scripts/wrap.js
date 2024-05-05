//next page
document.getElementById("preview").addEventListener("click", function() {
    // Add click animation class to the button
    this.classList.add("click-animation");

    // Redirect to home.html after the animation ends
    setTimeout(() => {
        window.location.href = "wrapview.html";
    }, 150); // 0.3 seconds for the animation duration
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
    //window.location.href = "index.html";
}





// Retrieve the user object from localStorage
storedWrap = localStorage.getItem('currentWrap');
if (storedWrap) {
    // Parse the JSON string back to an object
    const parsedData = JSON.parse(storedWrap);
    // Extract image URLs from the parsed object
     feeling = parsedData.feeling;
     src1 = parsedData.img1;
     src2 = parsedData.img2;
     src3 = parsedData.img3;
     src4 = parsedData.img4;
     wrap = parsedData.wrap;





     // p5 js sketch
     
let img1, img2, img3, img4; // Declare variables to hold the images

function preload() {
  // Load the images from the URLs
  img1 = loadImage('./img/wrapped.jpg');
  img2 = loadImage('./img/wrapped.jpg');
  img3 = loadImage('./img/wrapped.jpg');
  img4 = loadImage('./img/wrapped.jpg');
}

function setup() {
  let canvasWidth = document.getElementById('preview').clientWidth;
  let canvasHeight = document.getElementById('preview').clientHeight;
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('preview'); // attach canvas to the #preview div
}

function draw() {
  background(52,220,62);
  let imgWidth = width * 0.4; // Width of each image (20% of canvas width)
  let imgHeight = imgWidth * img1.height / img1.width; // Maintain aspect ratio
  let spacing = 20; // Spacing between images

  // Calculate the x-coordinate for the center of the canvas
  let centerX = width / 2;

  // Calculate the total width occupied by images and spacing
  let totalWidth = imgWidth * 4 + spacing * 3;

  // Calculate the starting x-coordinate for the first image
  let startX = centerX - totalWidth / 3;

  // Display the first image
  image(img1, startX, height / 2 - imgHeight / 2, imgWidth, imgHeight);

  // Display the second image
  image(img2, startX + imgWidth - spacing, (height / 2 - imgHeight / 2)*0.9, imgWidth, imgHeight);

  // Display the third image
  image(img3, startX + 2 * (imgWidth - spacing), (height / 2 - imgHeight / 2)*0.8, imgWidth, imgHeight);

  // Display the fourth image
  image(img4, startX + 3 * (imgWidth - spacing), height / 2 - imgHeight / 2, imgWidth, imgHeight);

  // Set text color
  fill(0); // Black text
  // Set text size
  textSize(32);
  // Set text alignment
  textAlign(CENTER, CENTER);
  // Draw text with background
  let textContent = "Feeling Good ";
  let textWidthValue = textWidth(textContent); // Get the width of the text
  let textHeightValue = textAscent() + textDescent(); // Get the total height of the text (including ascenders and descenders)
  let padding = 10; // Padding around the text
  let backgroundColor = color(255, 204, 0); // Background color (yellow in this example)
  let rectWidth = textWidthValue + 2 * padding; // Width of the background rectangle
  let rectHeight = textHeightValue + 2 * padding; // Height of the background rectangle
  let x = width / 2; // X-coordinate of the center of the canvas
  let y = (height / 2); // Y-coordinate of the center of the canvas
  // Draw background rectangle
  fill(backgroundColor);
  noStroke();
  rectMode(CENTER);
  rect(x, y+imgHeight*1.5, rectWidth, rectHeight);
  // Draw text
  fill(0); // Reset fill color to black for text
  text(textContent, x, y+imgHeight*1.4);
}

     // end of p5 js sketch
   
} else {
    // Handle case when 'currentWrap' is not found in localStorage
}