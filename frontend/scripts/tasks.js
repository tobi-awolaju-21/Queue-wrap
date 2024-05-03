 // Get all buttons
 const buttons = document.querySelectorAll('.b2');

 // Random x translation
 buttons.forEach(button => {
     const randomX = Math.floor(Math.random() * 91) - 49; // Random value between -25 and 25
     button.style.transform = `translateX(${randomX}px)`;
 });


 

 //next page
document.getElementById("play0").addEventListener("click", function() {
    // Add click animation class to the button
    this.classList.add("click-animation");

    // Redirect to home.html after the animation ends
    setTimeout(() => {
        window.location.href = "wrap.html";
    }, 300); // 0.3 seconds for the animation duration
});



//next page
document.getElementById("play1").addEventListener("click", function() {
    // Add click animation class to the button
    this.classList.add("click-animation");

    // Redirect to home.html after the animation ends
    setTimeout(() => {
        window.location.href = "wrap.html";
    }, 300); // 0.3 seconds for the animation duration
});

//next page
document.getElementById("play2").addEventListener("click", function() {
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
    //window.location.href = "index.html";
}









  // Get a reference to the storage service
  var storage = firebase.storage();




  

// Define arrays for capture buttons and image elements
const captureButtons = [
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4')
];

const imageElements = [
    document.getElementById('1img'),
    document.getElementById('2img'),
    document.getElementById('3img'),
    document.getElementById('4img')
];

// Add event listeners to each capture button
captureButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        // Trigger click event on the file input
        fileInput.click();
        
        // Set the current image element to update
        currentImageElement = imageElements[index];
    });
});

// Add event listener to the file input change event
fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        // File selected, you can upload it to Firebase Storage
        uploadImage(file);
    }
});

// Function to upload image to Firebase Storage and update the current image element
function uploadImage(file) {
    // Your Firebase Storage upload code here
    // For example:
    const storageRef = firebase.storage().ref();
    const filename = 'image_' + Date.now() + '.jpg';
    const uploadTask = storageRef.child(filename).put(file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
        function(snapshot) {
            // Track upload progress
        },
        function(error) {
            console.error('Upload failed:', error);
        },
        function() {
            // Upload successful, get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                console.log('File available at', downloadURL);
              
                // Update the source of the current image element
                currentImageElement.src = downloadURL;
            });
        }
    );
}
