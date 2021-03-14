const mainForm = document.querySelector('.main__form');

const binaryInput = document.getElementById('binary');
const decimalInput = document.getElementById('decimal');

/**
 * Handles the submit event of the main form.
 */
mainForm.addEventListener('submit', evt => {
    evt.preventDefault();

    const binaryValue = mainForm.elements['binary'].value;

    for (const digit of binaryValue) {
        if (digit !== '0' && digit !== '1') {
            alert('Please enter a valid binary digit.');
            toggleValidity(false);
            return;
        }
    }

    toggleValidity();
    decimalInput.value = parseInt(binaryValue, 2);
});

/**
 * Toggles the validity state of the binary input depending on modifier classes.
 */
function toggleValidity(valid = true) {
    valid
        ? binaryInput.classList.remove('main__form-section-input_validity_invalid')
        : binaryInput.classList.add('main__form-section-input_validity_invalid');
}