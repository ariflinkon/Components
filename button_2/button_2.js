// File path: /mnt/data/button.js

// Create a button element
const button = document.createElement('button');

// Set button text content
button.textContent = 'Click Me';

// Add an event listener to handle button clicks
button.addEventListener('click', () => {
    // Display an alert message when the button is clicked
    alert('Button was clicked!');
});

// Append the button to the body of the document
document.body.appendChild(button);
