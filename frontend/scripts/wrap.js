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

     const imageElements1 = [
        document.getElementById('1img'),
        document.getElementById('2img'),
        document.getElementById('3img'),
        document.getElementById('4img')
    ];
    // Assign image sources to the corresponding image elements
    imageElements1[0].src = src1;
    imageElements1[1].src = src2;
    imageElements1[2].src = src3;
    imageElements1[3].src = src4;
     // load on webpage



     // p5 js sketch
     
let img1, img2, img3, img4; // Declare variables to hold the images

function preload() {
  // Load the images from the URLs
  img1 = loadImage(src1);
  img2 = loadImage(src2);
  img3 = loadImage(src3);
  img4 = loadImage(src4);
}








function setup() {
  let canvasWidth = document.getElementById('preview').clientWidth;
  let canvasHeight = document.getElementById('preview').clientHeight;
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('preview'); // attach canvas to the #preview div
}

function draw() {
  background(52,220,62);
  // Set text color
  fill(0); // Black text
  // Set text size
  textSize(32);
  // Set text alignment
  textAlign(CENTER, CENTER);
  // Draw text with background
  let textContent = "Feeling " +feeling;
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