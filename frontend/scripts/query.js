var path;

// Array of words
var words = [
  "amazing 🌟",
  "busy 💼",
  "bored 😐",
  "cute 🐾",
  "down 🔽",
  "done ✅",
  "elegant 👗",
  "free 🆓",
  "good 👍",
  "gay 🏳️‍🌈",
  "hot 🔥",
  "invncible 🛡️",
  "in love ❤️",
  "jealous 😠",
  "kind 🤝",
  "lucky 🍀",
  "loved 💖",
  "lonely 😔",
  "magical ✨",
  "naughty 😈",
  "new 🆕",
  "overrated 👎",
  "punky 🎸",
  "queenly 👑",
  "restless 😬",
  "tired 😴",
  "techy 💻",
  "underrated 👌",
  "violated 😖",
  "voluptuous 🍑",
  "windy 💨",
  "well 👌",
  "yellow 💛",
  "serene 🏞️",
  "playful 🤹‍♂️",
  "determined 🏋️‍♂️",
  "nostalgic 📼",
  "hopeful 🙏",
  "energetic ⚡",
  "captivated 😯",
  "grateful 🙌",
  "inspired 💡",
  "silly 🤪",
  "mysterious 🕵️‍♂️",
  "adventurous 🗺️",
  "blissful 😇",
  "fearless 🦁",
  "radiant ☀️",
  "vibrant 🎨",
  "zen ☯️",
  "quirky 🤪",
  "whimsical 🌈",
  "dynamic 🔄",
  "exuberant 😄",
  "fierce 🔥",
  "glorious 🌅",
  "mellow 🎵",
  "serendipitous 🎉",
  "spellbinding 🔮",
  "wonderstruck 😲",
  "cozy 🏠",
  "dazzling 💎",
  "effervescent ✨",
  "fabulous 💃",
  "gleeful 😁",
  "harmonious 🎶",
  "mesmerizing 😍",
  "peppy 🕺",
  "ravishing 😘",
  "stellar 🌟",
  "tranquil 🌊",
  "upbeat 🎵"
];

// Get the div with id "options"
var optionsDiv = document.getElementById("options");

// Variable to store the currently selected button
var selectedButton = null;

var feeling;
var email;

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
        feeling = this.textContent;
    });
    // Append the button element to the options div
    optionsDiv.appendChild(buttonElement);
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
        const userData = storedUser;
        // User object is still valid, use it
         email = userData.email;
    }
} else {
    console.log("No user data stored in localStorage.");
    window.location.href = "index.html";
}




//next page
document.getElementById("done").addEventListener("click", function() {
  // Add click animation class to the button
  this.classList.add("click-animation");

  // Generate task map using Gemini API
  // Assuming 'feeling' variable is defined somewhere in your code

  // Get current timestamp
  var currentDate = new Date();
  var timestamp = currentDate.getTime();

  // Create key using feeling and timestamp
  var key = feeling + "_" + timestamp;

  // Create data object
  var jsonData = {
      timestamp: timestamp,
      feeling: feeling,
      img1:'http://blank.png',
      img2:'http://blank.png',
      img3:'http://blank.png',
      img4:'http://blank.png'
  };

 // Save jsonData to local storage
localStorage.setItem('currentWrap', JSON.stringify(jsonData));


  // Replace email domain to form path
  path = email.replace("@gmail.com", "");
  path = path.replaceAll(".", "");
  console.log(path);

  // Get reference to Firebase database
  var ref = firebase.database().ref(path);

  // Push data to Firebase with custom key
  ref.child(key).set(jsonData, function(error) {
      if (error) {
          console.error("Data could not be saved." + error);
      } else {
          console.log("New wrap created");
          // Redirect to tasks.html when push is successful 
          window.location.href = "tasks.html";
      }
  });
});
