
document.addEventListener("DOMContentLoaded", function() {
    const statusContents = document.querySelectorAll(".status-content");
    let currentIndex = 0;
  
    function showStatus(index) {
      statusContents.forEach((content, idx) => {
        if (idx === index) {
          content.classList.add("active");
        } else {
          content.classList.remove("active");
        }
      });
      console.log("Current status index:", index);
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
  
