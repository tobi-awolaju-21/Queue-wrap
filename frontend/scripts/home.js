
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
    var email = userData.email;



    

       
       // Function to retrieve data from a specific directory
function getDataFromDirectory(directory) {
  return new Promise((resolve, reject) => {
    firebase.database().ref(directory).once('value', (snapshot) => {
      const data = snapshot.val();
      resolve(data);
    }, (error) => {
      reject(error);
    });
  });
}

    path = email.replace("@gmail.com", "");
    path = path.replaceAll(".", "");
    console.log(path);
const directory = path;
getDataFromDirectory(directory)
  .then((data) => {
const jsonData = JSON.stringify(data);
 // Parse JSON data
const Jdata = JSON.parse(jsonData);
// Convert object keys to array and reverse it
const reversedKeys = Object.keys(Jdata).reverse();
// Get the container div
const containerDiv = document.querySelector('.container');
// Loop through the reversed array of keys and create div elements for each entry
reversedKeys.forEach((key) => {
        const entry = Jdata[key];
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item'); 
        itemDiv.style.color = '#000';
        itemDiv.style.fontSize = '15px';
        // Convert timestamp to a Moment object and get the time ago
        const timeAgo = moment(entry.timestamp).fromNow();
        itemDiv.innerHTML = `Feeling ${entry.feeling},<div style="font-size:10px; padding:4px; color:#000; background-color:#d8d8d8; border-radius:10px; width:40px; height:40px;">${timeAgo}</div>`;
        containerDiv.appendChild(itemDiv);
    });
})
  .catch((error) => {
    console.error('Error retrieving data:', error);
  });
     























    const photoURL = userData.photoURL;
    // Update username
    document.getElementById("username").innerText = username;
    // Update profile picture
    const img = document.getElementById("pfp");
    img.src = photoURL;
  }
} else {
  console.log("No user data stored in localStorage.");
window.location.href = "index.html";
}
//next page
document.getElementById("newwrapButton").addEventListener("click", function () {
  // Add click animation class to the button
  this.classList.add("click-animation");
  // Redirect to query.html after the animation ends
  setTimeout(() => {
    window.location.href = "query.html";
  }, 300); // 0.3 seconds for the animation duration
});



//random color
// Select the element with the class .block1
const block1 = document.querySelector('.block1');

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Set a random background color to the element
block1.style.backgroundColor = getRandomColor();
