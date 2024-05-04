var email;
var indexN;
var url1,url2,url3,url4 = "https://blank.png";


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

        const userData = storedUser;
     email = userData.email;

    }
} else {
    console.log("No user data stored in localStorage.");
    //window.location.href = "index.html";
}






// Retrieve the user object from localStorage
const storedWrap = localStorage.getItem('currentWrap');

if (storedWrap) {
    // Parse the JSON string back to an object
    const parsedData = JSON.parse(storedWrap);

    // Extract image URLs from the parsed object
    const img1i = parsedData.img1;
    const img2i = parsedData.img2;
    const img3i = parsedData.img3;
    const img4i = parsedData.img4;

    // Get image elements by their IDs
    const imageElements = [
        document.getElementById('1img'),
        document.getElementById('2img'),
        document.getElementById('3img'),
        document.getElementById('4img')
    ];

    // Assign image sources to the corresponding image elements
    imageElements[0].src = img1i;
    imageElements[1].src = img2i;
    imageElements[2].src = img3i;
    imageElements[3].src = img4i;

} else {
    // Handle case when 'currentWrap' is not found in localStorage
    // You can add appropriate behavior here, such as displaying a message or taking some default action
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
        indexN = index;

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
             


                if (indexN == 0) {
                    url1 = downloadURL;
                }

                if (indexN == 1) {
                    url2 = downloadURL;
                }

                if (indexN == 2) {
                    url3 = downloadURL;
                }

                if (indexN == 3) {
                    url4 = downloadURL;
                }

                


















            
                    // Parse the JSON string back to an object
                    var parsedData2 = JSON.parse(storedWrap);
                
                    // Extract image URLs from the parsed object
                    var timestamp = parsedData2.timestamp;
                    var feeling = parsedData2.feeling;

                //update the value in firebase



                var jsonData2 = {
                    timestamp: timestamp,
                    feeling: feeling,
                    img1: url1,
                    img2: url2,
                    img3: url3,
                    img4: url4
                };


                //push to the same path again to overlap

  // Create key using feeling and timestamp
  var key = feeling + "_" + timestamp;

                  // Replace email domain to form path
  var path = email.replace("@gmail.com", "");
  path = path.replaceAll(".","");

  // Get reference to Firebase database
  var ref = firebase.database().ref(path);

  // Push data to Firebase with custom key
  ref.child(key).set(jsonData2, function(error) {
      if (error) {
          console.error("Data could not be saved." + error);
      } else {
          console.log("New wrap created");
          // Redirect to tasks.html when push is successful 
          window.location.href = "tasks.html";
      }
    });
    
                //update the value in localstorage

// Save jsonData to local storage
localStorage.setItem('currentWrap', JSON.stringify(jsonData2));


























            });
        }
    );
}









