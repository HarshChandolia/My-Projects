// Event Listeners

// Convert temperature event
document.getElementById('convertor-form').addEventListener('submit', function(e) {

    // Keep results div hidden
    document.getElementById('result').style.display = 'none';

    // Reveal loading div image
    document.getElementById('loading').style.display = 'block';

    // Call convert function after 1.5 seconds
    setTimeout(convertToFar, 1500);

    e.preventDefault();
});


function convertToFar() {
    // Get input in Celsius
    const celsiusInput = document.getElementById('celsiusInput');

    // Get input value
    const inputValue = celsiusInput.value;

    // Convert Celsius to Farenheit
    const t = (inputValue * (9/5)) + 32;
    const tempInFar = t.toFixed(1); // limit to one decimal point

    // Validate input
    if (isFinite(tempInFar) && inputValue !== '' && !isNaN(inputValue)) {
        // Store celsius input value in celsius display span
        document.getElementById('celsiusDisplay').value = inputValue;

        // Store result value in result span
        document.getElementById('farenheitResult').value = tempInFar;

        // Hide loading image
        document.getElementById('loading').style.display = 'none';

        // Show result div
        document.getElementById('result').style.display = 'block';
    } else {
        // Hide loading image
        document.getElementById('loading').style.display = 'none';

        showAlert('Please enter a valid number', 'h4 alert alert-danger');
    }
}

function showAlert(msg, className) {
    // Create alert div
    const alertDiv = document.createElement('div');

    // Add class to alert div
    alertDiv.className = className;

    // Add text to alert div
    alertDiv.appendChild(document.createTextNode(msg));

    // Get parent
    const form = document.getElementById('convertor-form');

    // Get element before which alert div needs to be inserted
    const tempInput = document.getElementById('temp-input');

    // Insert alert div
    form.insertBefore(alertDiv, tempInput);

    // Clear message after 3 seconds
    setTimeout(clearAlert, 3000);
}

function clearAlert() {
    document.querySelector('.alert-danger').remove();
}