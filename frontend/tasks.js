 // Get all buttons
 const buttons = document.querySelectorAll('.b2');

 // Random x translation
 buttons.forEach(button => {
     const randomX = Math.floor(Math.random() * 91) - 49; // Random value between -25 and 25
     button.style.transform = `translateX(${randomX}px)`;
 });


 
//next page
document.getElementById("play").addEventListener("click", function() {
    // Add click animation class to the button
    this.classList.add("click-animation");

    // Redirect to home.html after the animation ends
    setTimeout(() => {
        window.location.href = "wrap.html";
    }, 300); // 0.3 seconds for the animation duration
});