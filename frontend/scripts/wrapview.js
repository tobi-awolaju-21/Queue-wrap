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




  document.getElementById("mytext0").textContent = parsedData0.wrap;

  
  setTimeout(() => {
  var jsonString = document.getElementById("mytext0").textContent;
  jsonString = jsonString.replaceAll("```","");
  jsonString = jsonString.replaceAll("\\n", "");
  jsonString = jsonString.replaceAll("\\", "");

  const startIndex = jsonString.indexOf('{"comment1":');
const endIndex = jsonString.lastIndexOf('"}') - 1;
const trimmedJsonString = jsonString.substring(startIndex, endIndex);
//const result = JSON.parse(trimmedJsonString);
console.log(trimmedJsonString);
  

jsonString = trimmedJsonString+"}";
const jsonObject = JSON.parse(jsonString);


  // Extracted comments
  const comments = {};
  for (let i = 1; i <= 4; i++) {
    const commentKey = `comment${i}`;
    const comment = jsonObject[commentKey];
    if (comment) {
      comments[`c${i}`] = comment.text;
    }
  }

  const { c1, c2, c3, c4 } = comments;

  console.log("Comment 1:", c1);
  console.log("Comment 2:", c2);
  console.log("Comment 3:", c3);
  console.log("Comment 4:", c4);

  // Update HTML elements with comment text
  document.getElementById("mytext1").textContent = c1;
  document.getElementById("mytext2").textContent = c2;
  document.getElementById("mytext3").textContent = c3;
  document.getElementById("mytext4").textContent = c4;

}, 1000); // 1000 milliseconds = 1 second