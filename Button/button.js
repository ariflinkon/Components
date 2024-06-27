// File path: /mnt/data/button.js

// Get the button element by its ID
const button = document.getElementById('myButton');

// Add an event listener to handle button clicks
button.addEventListener('click', () => {
    // Redirect to another page when the button is clicked
    window.location.href = '#'; // Replace with the URL of the page you want to navigate to
    // Display an alert message when the button is clicked
    alert('Please add a page instant of "#"'); //Remove this line if don't need alert
});
