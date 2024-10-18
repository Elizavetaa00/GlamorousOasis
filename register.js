function registerUser() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const registerMessage = document.getElementById("registerMessage");

    if (password !== confirmPassword) {
        registerMessage.textContent = "Пароли не совпадают.";
        return false;
    }

    if (password.length < 6) {
        registerMessage.textContent = "Пароль должен содержать не менее 6 символов.";
        return false;
    }
    const user = { username: username, email: email, password: password };
    localStorage.setItem('user', JSON.stringify(user));

    registerMessage.style.color = "green";
    registerMessage.textContent = "Регистрация успешна!";

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
    return false;
}