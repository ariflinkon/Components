/* 
+---------------------+     triggers     +--------------+
|       Form          |---------------->| Submit Event  |
+---------------------+                  +--------------+
        |                                     |
        v                                     v
+---------------------+                +----------------+
|    Input Field      |                | updateAmount() |
+---------------------+                +----------------+
        |                                     |
        v                                     |
   contains                                   |
        |                                     |
        v                                     |
+---------------------+                       |
|       Button        |-----------------------+
+---------------------+                       |
              contains                        |
        +---------------------+               |
        |   Summary Card      |<--------------+
        +---------------------+
 */




// Add event listener to deposit form
document.getElementById('deposit-form').addEventListener('submit', function(noRefresh) {
   noRefresh.preventDefault();// Prevent form submission
    let depositAmount = parseFloat(document.getElementById('deposit-amount').value); // Get deposit amount
    if (!isNaN(depositAmount) && depositAmount > 0) { // Check if input is a valid number greater than 0
        updateAmount('Deposit', depositAmount); // Call updateAmount function for deposit
    }
});




// Add event listener to withdraw form
document.getElementById('withdraw-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    let withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value); // Get withdraw amount
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) { // Check if input is a valid number greater than 0
        updateAmount('Withdraw', withdrawAmount); // Call updateAmount function for withdrawal
    }
});

// Function to update deposit, withdrawal, and balance amounts
function updateAmount(type, amount) {
    let depositElement = document.querySelector('.summary .card:nth-child(1) p'); // Select deposit element
    let withdrawElement = document.querySelector('.summary .card:nth-child(2) p'); // Select withdrawal element
    let balanceElement = document.querySelector('.summary .card:nth-child(3) p'); // Select balance element

    // Get current deposit, withdrawal, and balance amounts
    let currentDeposit = parseFloat(depositElement.textContent.slice(1));
    let currentWithdraw = parseFloat(withdrawElement.textContent.slice(1));
    let currentBalance = parseFloat(balanceElement.textContent.slice(1));

    // Update amounts based on transaction type
    if (type === 'Deposit') {
        currentDeposit += amount;
        currentBalance += amount;
    } else if (type === 'Withdraw' && currentBalance >= amount) {
        currentWithdraw += amount;
        currentBalance -= amount;
    }
    else {alert("Insuficient Balance");

}

    // Update displayed amounts with formatted currency
    depositElement.textContent = `$${currentDeposit.toFixed(2)}`;
    withdrawElement.textContent = `$${currentWithdraw.toFixed(2)}`;
    balanceElement.textContent = `$${currentBalance.toFixed(2)}`;
}
