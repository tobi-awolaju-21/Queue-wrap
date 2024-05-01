 // Get all buttons
 const buttons = document.querySelectorAll('.b2');

 // Random x translation
 buttons.forEach(button => {
     const randomX = Math.floor(Math.random() * 91) - 49; // Random value between -25 and 25
     button.style.transform = `translateX(${randomX}px)`;
 });