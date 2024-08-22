document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let username = document.getElementById('username');
    let phone = document.getElementById('phone');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword');
    let passwordMismatch = document.getElementById('passwordMismatch');

    let isValid = true;


    if (username.value.length < 5 || username.value.length > 20 || !/[A-Z]/ig.test(username.value) || !/[a-z]/ig.test(username.value)) {
        username.classList.add('error');
        isValid = false;
    } else {
        username.classList.remove('error');
    }

    const phonePattern = /^\d{11}$/;
    if (!phonePattern.test(phone.value)) {
        phone.classList.add('error');
        isValid = false;
    } else {
        phone.classList.remove('error');
    }


    const emailPattern = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,})/;
    if (!emailPattern.test(email.value)) {
        email.classList.add('error');
        isValid = false;
    } else {
        email.classList.remove('error');
    }


    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordPattern.test(password.value)) {
        password.classList.add('error');
        isValid = false;
    } else {
        password.classList.remove('error');
    }


    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('error');
        passwordMismatch.style.display = 'block';
        isValid = false;
    } else {
        confirmPassword.classList.remove('error');
        passwordMismatch.style.display = 'none';
    }


    if (isValid) {
        alert('Form is valid!');
    }
});
