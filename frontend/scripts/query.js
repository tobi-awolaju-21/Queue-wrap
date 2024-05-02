// Array of words
var words = ["airport","hospital", "concert", "theme park","movie theater", "popular restaurant", "train station","festival", "tourist attraction", "museum", "sports stadium", "shopping"];

// Get the div with id "options"
var optionsDiv = document.getElementById("options");

// Variable to store the currently selected button
var selectedButton = null;

// Loop through the words array
words.forEach(function(word, index) {
    // Create a new button element
    var buttonElement = document.createElement("button");
    // Set the text content of the button element to the word
    buttonElement.textContent = word;
    // Set the id of the button element to its index
    buttonElement.id = index;
    // Add an event listener to the button element
    buttonElement.addEventListener("click", function() {
        // Check if there's a previously selected button
        if (selectedButton) {
            // Revert the color of the previously selected button to default
            selectedButton.style.backgroundColor = "";
            selectedButton.style.color = "";
        }
        // Set the background color of the clicked button
        this.style.backgroundColor = "#e6acff";
        this.style.color = "black";

        // Set the clicked button as the currently selected button
        selectedButton = this;
        // Log the word when clicked
        console.log(this.textContent);
    });
    // Append the button element to the options div
    optionsDiv.appendChild(buttonElement);
});



//next page
document.getElementById("done").addEventListener("click", function() {
    // Add click animation class to the button
    this.classList.add("click-animation");
     

  //generate task map using gemini api
// push reponse to firebase rtdb as json

var jsonData = {
    key1: 'value1',
    key2: 'value2',
    // Add more key-value pairs as needed
  };

var ref = firebase.database().ref('tobi/today');

ref.push(jsonData, function(error) {
  if (error) {
    console.error("Data could not be saved." + error);
  } else {
    console.log("New wrap created");
      // go to this url when push is successful 
  window.location.href = "tasks.html";
  }
});


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
