// Array of words
var words = ["airport","hospital", "concert", "theme park","movie theater", "popular restaurant", "train station","festival", "tourist attraction", "museum", "sports stadium", "shopping"];

// Get the div with id "options"
var optionsDiv = document.getElementById("options");

// Variable to store the currently selected button
var selectedButton = null;

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
        this.style.backgroundColor = "grey";
        this.style.color = "white";

        // Set the clicked button as the currently selected button
        selectedButton = this;
        // Log the word when clicked
        console.log(this.textContent);
    });
    // Append the button element to the options div
    optionsDiv.appendChild(buttonElement);
});
