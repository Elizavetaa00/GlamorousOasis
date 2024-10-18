function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("loginMessage");

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && username === user.username && password === user.password) {
        loginMessage.style.color = "green";
        loginMessage.textContent = "Успешная авторизация!";

        localStorage.setItem('loggedInUser', username);

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
        return false;
    } else {
        loginMessage.textContent = "Неверное имя пользователя или пароль.";
        return false;
    }
}
