// Array of words
var words = ["cat", "fish", "dog", "mom", "dad", "text", "hello", "war", "pic", "fools"];

// Get the div with id "options"
var optionsDiv = document.getElementById("options");

// Loop through the words array
words.forEach(function(word, index) {
    // Create a new p element
    var pElement = document.createElement("button");
    // Set the text content of the p element to the word
    pElement.textContent = word;
    // Set the id of the p element to its index
    pElement.id = index;
    // Add an event listener to the p element
    pElement.addEventListener("click", function() {
        // Log the word when clicked
        console.log(this.textContent);
    });
    // Append the p element to the options div
    optionsDiv.appendChild(pElement);
});