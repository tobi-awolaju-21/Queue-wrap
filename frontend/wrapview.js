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
