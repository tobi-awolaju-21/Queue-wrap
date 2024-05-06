

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






     // p5 js sketch
     var offsetY = 40;

     function setup() {
       let canvasWidth = document.getElementById('preview').clientWidth;
       let canvasHeight = document.getElementById('preview').clientHeight;
       let canvas = createCanvas(canvasWidth, canvasHeight);
       canvas.parent('preview2'); // attach canvas to the #preview div
     }
     
     function draw() {
       background(0,0,0,0);
       // Set text color
       fill(0); // Black text
       // Set text size
       textSize(18);
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
       rect(x, y+offsetY*1.5, rectWidth, rectHeight);
       // Draw text
       fill(0); // Reset fill color to black for text
       text(textContent, x, y+offsetY*1.4);
     }
     
     
     // Add event listener to the canvas
     function touchStarted() {
         if (touches.length > 0) {
           document.getElementById('preview').click();
       }
     }
     
     document.getElementById('preview').addEventListener('click', function() {
       // Scale up the preview
       this.style.transform = 'scale(2)';
       // Redirect to "wrapview.html" after 500ms
       setTimeout(function() {
           window.location.href = "wrapview.html";
       }, 500);
     });
          // end of p5 js sketch
// Retrieve the user object from localStorage
storedWrap = localStorage.getItem('currentWrap');
if (storedWrap) {
    // Parse the JSON string back to an object
    const parsedData = JSON.parse(storedWrap);
   
} else {
    // Handle case when 'currentWrap' is not found in localStorage
}









// Retrieve the user object from localStorage
storedWrap = localStorage.getItem('currentWrap');
const parsedData0 = JSON.parse(storedWrap);
console.log(parsedData0);
// start sending shittt to backend
sendDataToBackend(parsedData0);
async function sendDataToBackend(parsedData0) {
    // JSON data to send to the backend
    try {
      const response = await fetch('https://queue-wrap.onrender.com/processData', {
        method: 'POST',
        headers:  {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(parsedData0)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
        window.location.href = "wrap.html";
      }

      const processedString = await response.text();
      console.log('Processed string from backend:', processedString);
      
      //push to firebase
                var jsonData3 = {
                    timestamp: parsedData0.timestamp,
                    feeling: parsedData0.feeling,
                    img1: parsedData0.img1,
                    img2: parsedData0.img2,
                    img3: parsedData0.img3,
                    img4: parsedData0.img4,
                    wrap: processedString
                };
                var ref = firebase.database().ref(path);

                var key = parsedData0.feeling + "_" + parsedData0.timestamp;
                ref.child(key).set(jsonData3, function (error) {
                    if (error) {
                        console.error("Data could not be saved." + error);
                    } else {
                        console.log("New wrap created");
                        // update local storage
                        localStorage.setItem('currentWrap', JSON.stringify(jsonData3));
                        // Redirect to tasks.html when push is successful 
                        window.location.href = "wrappview.html";
                        //send this to the backend
                        console.log(JSON.stringify(jsonData3))
                    }
                });
      //end of push to firebase 

       
       
    } catch (error) {
      console.error('Error sending data to backend:', error);
      window.location.href = "wrap.html";
    }
  }

