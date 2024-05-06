document.addEventListener("DOMContentLoaded", function() {
  const statusContents = document.querySelectorAll(".status-content");
  const progressBar = document.querySelector(".progress-segment");
  let currentIndex = 0;

  function showStatus(index) {
    statusContents.forEach((content, idx) => {
      if (idx === index) {
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    });
    updateProgressBar(index);
    console.log("Current status index:", index);
  }

  function updateProgressBar(index) {
    const segmentWidth = 100 / statusContents.length;
    progressBar.style.width = `${segmentWidth * (index + 1)}%`;
  }

  function nextStatus() {
    if (currentIndex < statusContents.length - 1) {
      currentIndex++;
      showStatus(currentIndex);
    }
  }

  function prevStatus() {
    if (currentIndex > 0) {
      currentIndex--;
      showStatus(currentIndex);
    }
  }

  document.getElementById("next-btn").addEventListener("click", nextStatus);
  document.getElementById("prev-btn").addEventListener("click", prevStatus);

  // Touch event listener for navigation
  document.addEventListener("touchstart", function(event) {
    const touchX = event.touches[0].clientX;
    const screenWidth = window.innerWidth;
    if (touchX < screenWidth / 2) {
      prevStatus();
    } else {
      nextStatus();
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




//share buton
document.getElementById('share').addEventListener('click', function() {
  // Check if the Web Share API is supported
  if (navigator.share) {
      // Call the share method with the string you want to share
      navigator.share({
          title: 'Share Example',
          text: 'mywraps',
      })
      .then(() => console.log('Share successful'))
      .catch((error) => console.log('Error sharing:', error));
  } else {
      // Fallback for browsers that do not support the Web Share API
      console.log('Web Share API not supported');
      // You can implement your custom sharing functionality here for unsupported browsers
  }
});

//closeclicked
document.getElementById('close').addEventListener('click', function() {
  history.back();
  history.back();
  history.back();
});








// Retrieve the user object from localStorage
storedWrap = localStorage.getItem('currentWrap');
const parsedData0 = JSON.parse(storedWrap);
console.log(parsedData0);
                var jsonData3 = {
                    timestamp: parsedData0.timestamp,
                    feeling: parsedData0.feeling,
                    img1: parsedData0.img1,
                    img2: parsedData0.img2,
                    img3: parsedData0.img3,
                    img4: parsedData0.img4,
                    wrap: parsedData0.wrap
                };


                var stringWrap =  parsedData0.wrap;
                document.getElementById("mytext").textContent = stringWrap;


                const jsonString = '{"text":"```json\n{\n\"comment1\": \"Your Style Vibe: #Snatched! You\'re all about confidence and bold looks that turn heads. 🤩\",\n\"comment2\": \"Your Fashion Aura: #DrippedOut! Effortlessly cool with a touch of mystery, you own your unique style. 😎\",\n\"comment3\": \"Your Outfit Energy: #Fleekin! Always on point, your outfits are a perfect blend of trendy and timeless. ✨\",\n\"comment4\": \"Your Look Language: #Bussin! You know how to rock any outfit and make it your own, with an extra dose of fabulousness. 💅\" \n}\n```"}';

// Extracting JSON part from the string
const jsonStartIndex = jsonString.indexOf('{');
const jsonEndIndex = jsonString.lastIndexOf('}');
const jsonStr = jsonString.substring(jsonStartIndex, jsonEndIndex + 1);

// Parsing JSON
const jsonData = JSON.parse(jsonStr);

// Extracting comments
const comment1 = jsonData.comment1.trim();
const comment2 = jsonData.comment2.trim();
const comment3 = jsonData.comment3.trim();
const comment4 = jsonData.comment4.trim();

console.log("comment1:", comment1);
console.log("comment2:", comment2);
console.log("comment3:", comment3);
console.log("comment4:", comment4);
