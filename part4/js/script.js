// $() function to get the object for the HTML element specified by the CSS selector
function $(selector) {
    return document.querySelector(selector);
}

// ready event handler containing the declaration for the emailPattern
document.addEventListener('DOMContentLoaded', function () {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Move focus to the "Arrival date" text box
    $('#arrivalDate').focus();

    // Event handler for the form submit event
    $('form').addEventListener('submit', function (event) {
        // Prevent form submission
        event.preventDefault();

        // Validation
        const arrivalDate = $('#arrivalDate').value.trim();
        const numberOfNights = $('#numberOfNights').value.trim();
        const adults = $('#adults').value.trim();
        const children = $('#children').value.trim();
        const name = $('#name').value.trim();
        const emailAddress = $('#emailAddress').value.trim();
        const phone = $('#phone').value.trim();

        // Check if all text boxes have values
        if (!arrivalDate || !numberOfNights || !adults || !children || !name || !emailAddress || !phone) {
            alert('Please fill in all fields.');
            return;
        }

        // Check if numberOfNights is numeric
        if (isNaN(numberOfNights)) {
            alert('Number of nights must be numeric.');
            return;
        }

        // Check if email matches the pattern
        if (!emailPattern.test(emailAddress)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Put trimmed entries back into the controls
        $('#arrivalDate').value = arrivalDate;
        $('#numberOfNights').value = numberOfNights;
        $('#adults').value = adults;
        $('#children').value = children;
        $('#name').value = name;
        $('#emailAddress').value = emailAddress;
        $('#phone').value = phone;

        // Submit the form
        this.submit();
    });
});
