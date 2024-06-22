document.addEventListener('DOMContentLoaded', (event) => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('selected');
        });
    });
});

function multiply(a, b) {
    return a * b;
}

function multiplyWithSelectedCards() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
        return;
    }

    const selectedCards = document.querySelectorAll('.card.selected');
    const selectedCount = selectedCards.length;

    if (selectedCount === 0) {
        alert('Please select at least one card');
        return;
    }

    const result = multiply(num1, num2) * selectedCount;
    document.getElementById('result').innerText = `The result of multiplying ${num1} and ${num2} and then multiplying by the number of selected cards (${selectedCount}) is ${result}`;
}
