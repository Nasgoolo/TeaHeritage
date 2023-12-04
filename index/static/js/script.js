document.addEventListener('DOMContentLoaded', function() {
    var loginBtn = document.getElementById('loginBtn');
    var loginDropdown = document.getElementById('loginDropdown');
    var loginSubmit = document.getElementById('loginSubmit');

    // Показати або приховати випадаюче вікно при кліку на кнопку
    loginBtn.addEventListener('click', function() {
        loginDropdown.style.display = (loginDropdown.style.display === 'block') ? 'none' : 'block';
    });

    // Обробник події для обробки логіну
    loginSubmit.addEventListener('click', function() {
        var email = document.getElementById('exampleDropdownFormEmail2').value;
        var password = document.getElementById('exampleDropdownFormPassword2').value;

        // Додайте вашу логіку логіну тут
        console.log('Email:', email);
        console.log('Password:', password);

        // Закрити випадаюче вікно
        loginDropdown.style.display = 'none';
    });
});