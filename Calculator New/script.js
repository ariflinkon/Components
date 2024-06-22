 
    const depositForm = document.getElementById('depositForm');
    const withdrawForm = document.getElementById('withdrawForm');
    const depositAmountInput = document.getElementById('depositAmount');
    const withdrawAmountInput = document.getElementById('withdrawAmount');
    let deposit = 0;
    let withdraw = 0;
    let balance = 1299;

    depositForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const amount = parseFloat(depositAmountInput.value);
        if (amount > 0) {
            deposit += amount;
            balance += amount;
            updateDisplay();
        }
        depositAmountInput.value = '';
    });

    withdrawForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const amount = parseFloat(withdrawAmountInput.value);
        if (amount > 0 && amount <= balance) {
            withdraw += amount;
            balance -= amount;
            updateDisplay();
        }
        withdrawAmountInput.value = '';
    });

    function updateDisplay() {
        document.querySelector('.card-title:contains("Deposit") + .card-text').textContent = `$${deposit.toFixed(2)}`;
        document.querySelector('.card-title:contains("Withdraw") + .card-text').textContent = `$${withdraw.toFixed(2)}`;
        document.querySelector('.card-title:contains("Balance") + .card-text').textContent = `$${balance.toFixed(2)}`;
    }
