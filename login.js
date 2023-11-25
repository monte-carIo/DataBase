document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve values from the form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform any additional client-side validation if needed
    if (username === '' || password === '') {
        alert('Please enter both username and password.');
        return;
    }
    
    // Use Ajax or fetch API to send the form data to the server asynchronously
    // For simplicity, I'll just log the values to the console
    console.log('Username:', username);
    console.log('Password:', password);
    alert('Login successful!');
    // redirect to home page
    window.location.href = "testing_2.html";
    
    // You can now perform any further logic, such as sending the data to the server using Ajax
});