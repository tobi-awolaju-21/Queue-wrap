

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
    //window.location.href = "index.html";
}





// Retrieve the user object from localStorage
storedWrap = localStorage.getItem('currentWrap');
if (storedWrap) {
    // Parse the JSON string back to an object
    const parsedData = JSON.parse(storedWrap);
    // Extract image URLs from the parsed object
     feeling = parsedData.feeling;
     src1 = parsedData.img1;
     src2 = parsedData.img2;
     src3 = parsedData.img3;
     src4 = parsedData.img4;
     wrap = parsedData.wrap;

     const imageElements1 = [
        document.getElementById('1img'),
        document.getElementById('2img'),
        document.getElementById('3img'),
        document.getElementById('4img')
    ];
    // Assign image sources to the corresponding image elements
    imageElements1[0].src = src1;
    imageElements1[1].src = src2;
    imageElements1[2].src = src3;
    imageElements1[3].src = src4;
     // load on webpage


   
} else {
    // Handle case when 'currentWrap' is not found in localStorage
}
