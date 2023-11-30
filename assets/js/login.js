document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve values from the form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    // Perform any additional client-side validation if needed
    if (username == '' || password == '') {
        alert('Please enter both username and password.');
        return;
    }
    if (username == 'manager' && password == '123') {
        alert('Login successful!');
        window.location.href = "home.html";
    }
    else {
        alert('Login failed!');
        return;
    }
    // You can now perform any further logic, such as sending the data to the server using Ajax
});