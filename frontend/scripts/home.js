
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


console.log("Username:", username);
console.log("Email:", email);
console.log("photoURL:", photoURL);

    }
} else {
    console.log("No user data stored in localStorage.");
    window.location.href = "index.html";
}























//next page
document.getElementById("newwrapButton").addEventListener("click", function() {
    // Add click animation class to the button
    this.classList.add("click-animation");

    // Redirect to home.html after the animation ends
    setTimeout(() => {
    


//create new wrap root in firebase rtdb
// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyALxLdpqTkaYDrDILveqL4y_CTpSpnseiw",
    authDomain: "queuewrap.firebaseapp.com",
    projectId: "queuewrap",
    storageBucket: "queuewrap.appspot.com",
    messagingSenderId: "181118240793",
    appId: "1:181118240793:web:190390eeffe69e34178288",
    measurementId: "G-QH07EEN0HY"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Reference to your Firebase Realtime Database
  var database = firebase.database();
  
  // Path where you want to send the dummy JSON
var emailWithoutDomain = email.replace(/@gmail\.com$/, "");
  var path = "emailWithoutDomain/wrapdate";
  
  // Dummy JSON data
  var dummyData = {
    key1: "value1",
    key2: "value2",
    key3: {
      nestedKey1: "nestedValue1",
      nestedKey2: "nestedValue2"
    }
  };
  
  // Function to send dummy JSON to Firebase Realtime Database
  function sendDummyData() {
    database.ref(path).set(dummyData)
      .then(function() {
        console.log("Dummy data sent successfully!");
        
      })
      .catch(function(error) {
        console.error("Error sending dummy data: ", error);
      });
  }
  
  // Call the function to send dummy data
  sendDummyData();
  









        window.location.href = "query.html";
    }, 300); // 0.3 seconds for the animation duration
});

