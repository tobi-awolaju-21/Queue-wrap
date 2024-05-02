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
});