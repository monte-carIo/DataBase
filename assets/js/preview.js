function validateAndNavigate() {
    // Validate that all input fields are filled
    const inputs = ['dropdown1', 'dropdown2', 'dropdown3', 'dropdown4'];
    for (const inputId of inputs) {
        const inputValue = document.getElementById(inputId).value;
        if (inputValue.trim() === '') {
            alert('Please fill all fields before proceeding.');
            return;
        }
    }

    // All fields are filled, navigate to printer.html
    window.location.href = 'printer.html';
}