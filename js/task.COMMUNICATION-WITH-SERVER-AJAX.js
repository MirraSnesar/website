//1.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX Example</title>
</head>
<body>

<button id="myButton" onclick="sendRequest()">Натисни мене</button>

<script>
function sendRequest() {
    // Створюємо новий об'єкт XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Встановлюємо обробник подій для обробки стану запиту
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Отримали відповідь від сервера, оновлюємо вміст кнопки
            var response = JSON.parse(xhr.responseText);
            document.getElementById("myButton").innerHTML = "Голоси: " + response.votes;
        }
    };

    // Виконуємо GET-запит на сервер
    xhr.open("GET", "server.php", true);
    xhr.send();
}
</script>

</body>
</html>

//2.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Books List</title>
</head>
<body>

<button onclick="loadAuthors()">Завантажити авторів</button>

<ul id="authorsList"></ul>

<script>
function loadAuthors() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Отримали відповідь від сервера
            var books = JSON.parse(xhr.responseText);
            displayAuthors(books);
        }
    };

    // Завантажуємо файл books.json
    xhr.open("GET", "books.json", true);
    xhr.send();
}

function displayAuthors(books) {
    var authorsList = document.getElementById("authorsList");

    // Очищаємо список перед виведенням нових даних
    authorsList.innerHTML = "";

    // Проходимо по кожній книзі та додаємо авторів до списку
    books.forEach(function(book) {
        var authorItem = document.createElement("li");
        authorItem.textContent = book.author;
        authorsList.appendChild(authorItem);
    });
}
</script>

</body>
</html>

//3.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random User Info</title>
</head>
<body>

<div id="userInfo">
    <img id="avatar" alt="Avatar">
    <p><strong>Ім'я:</strong> <span id="name"></span></p>
    <p><strong>Вік:</strong> <span id="age"></span></p>
    <p><strong>Стать:</strong> <span id="gender"></span></p>
    <p><strong>Країна:</strong> <span id="country"></span></p>
    <p><strong>Логін:</strong> <span id="login"></span></p>
    <p><strong>Пароль:</strong> <span id="password"></span></p>
    <p><strong>Пошта:</strong> <span id="email"></span></p>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    loadRandomUser();
});

function loadRandomUser() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Отримали відповідь від сервера
            var userData = JSON.parse(xhr.responseText);
            displayUserInfo(userData.results[0]);
        }
    };

    // Завантажуємо дані випадкового користувача
    xhr.open("GET", "https://randomuser.me/api/", true);
    xhr.send();
}

function displayUserInfo(user) {
    document.getElementById("avatar").src = user.picture.large;
    document.getElementById("name").textContent = user.name.first + " " + user.name.last;
    document.getElementById("age").textContent = user.dob.age;
    document.getElementById("gender").textContent = user.gender;
    document.getElementById("country").textContent = user.location.country;
    document.getElementById("login").textContent = user.login.username;
    document.getElementById("password").textContent = user.login.password;
    document.getElementById("email").textContent = user.email;
}
</script>

</body>
</html>