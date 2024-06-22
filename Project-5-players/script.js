document.addEventListener('DOMContentLoaded', () =>{
   
    //select option setup
        const selectButtons = document.querySelectorAll('.select-button');
        const selectedCountSpan = document.getElementById('selected-count');
        const selectedCardsList = document.getElementById('selected-cards-list');
        let selectedCount = 0;
        let selectedCards = [];

        selectButtons.forEach(button => {
            button.addEventListener('click', () => {
                const card = button.parentElement;
                const cardName = card.querySelector('.player-name').textContent;
                if (!card.classList.contains('selected')) {
                    card.classList.add('selected');
                    selectedCount++;
                    selectedCards.push(cardName);
                } else {
                    card.classList.remove('selected');
                    selectedCount--;
                    selectedCards = selectedCards.filter(name => name !== cardName);
                }
                selectedCountSpan.textContent = selectedCount;
                updateSelectedCardsList(selectedCards, selectedCardsList);
            });
        });

        function updateSelectedCardsList(cards, listElement) {
            listElement.innerHTML = '';
            cards.forEach(card => {
                const listItem = document.createElement('li');
                listItem.textContent = card;
                listElement.appendChild(listItem);
            });
        }



    //calculator

    function multiply(a, b) {
        return a * b;
    }

    function multiplyNumbers() {
        const num2 = parseFloat(document.getElementById('budget-per-player').value);

        if (isNaN(selectedCount) || isNaN(num2)) {
            alert('Please enter valid numbers');
            return;
        }

        const result = multiply(selectedCount, num2);
        document.getElementById('player-total-value').innerText = `The result of multiplying ${num1} and ${num2} is ${player-total-value}`;
    }









  // Function to calculate total budget
    /* function calculateTotalBudget(budgetPerPlayer, managerBudget, coachBudget, selectedCount) {
        const totalBudget = budgetPerPlayer * selectedCount + managerBudget + coachBudget;
        return totalBudget;
    }

    // Event listener for "Calculate" button
    const calculateBtn = document.getElementById('calculate-btn');
    calculateBtn.addEventListener('click', function() {
        const budgetPerPlayer = parseFloat(document.getElementById('budget-per-player').value);
        const selectedPlayersCount = document.querySelectorAll('.bg-gray-200 ul li').length;
        const result = budgetPerPlayer * selectedPlayersCount;
        document.getElementById('calculate-result').textContent = 'Total Budget for Players: ' + result;
    });

    // Event listener for "Total Calculate" button
    const totalCalculateBtn = document.getElementById('total-calculate-btn');
    totalCalculateBtn.addEventListener('click', function() {
        const budgetPerPlayer = parseFloat(document.getElementById('budget-per-player').value);
        const managerBudget = parseFloat(document.getElementById('manager-budget').value);
        const coachBudget = parseFloat(document.getElementById('coach-budget').value);
        const selectedPlayersCount = document.querySelectorAll('.bg-gray-200 ul li').length;
        const totalBudget = calculateTotalBudget(budgetPerPlayer, managerBudget, coachBudget, selectedPlayersCount);
        document.getElementById('total-budget').textContent = 'Total Budget: ' + totalBudget;
    });

 */
});