document.addEventListener('DOMContentLoaded', function() {
    const maxPriceInput = document.getElementById('max-price');
    const maxPriceValue = document.getElementById('max-price-value');

    function updatePriceValues() {
        maxPriceValue.textContent = `$${maxPriceInput.value}`;
    }
    maxPriceInput.addEventListener('input', updatePriceValues);

    updatePriceValues();
});
