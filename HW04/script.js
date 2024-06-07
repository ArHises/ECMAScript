/* 
Домашнее задание

""Получение данных о пользователе""

Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать promise, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

Подсказка, с последовательностью действий:
getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.
*/

async function getUserData(userId) {
  const url = `https://example.com/users/${userId}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`User with ID ${userId} not found`);
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    return Promise.reject(error.message);
  }
}

// Пример использования:
getUserData(1)
  .then((userData) => {
    console.log(userData);
  })
  .catch((error) => {
    console.error(error);
  });

/*

""Отправка данных на сервер""

Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

*Подсказка *
// Пример использования функции
const user = {
name: 'John Smith',
age: 30,
email: 'john@example.com'
};

saveUserData(user)
.then(() => {
console.log('User data saved successfully');
})
.catch(error => {
console.log(error.message);
});

saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени

*/
async function saveUserData(user) {
  const url = "https://example.com/users";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Failed to save user data");
    }

    return;
  } catch (error) {
    return Promise.reject(error.message);
  }
}

const user = {
  name: "John Smith",
  age: 30,
  email: "john@example.com",
};

saveUserData(user)
  .then(() => {
    console.log("User data saved successfully");
  })
  .catch((error) => {
    console.log(error);
  });

/*

""Изменение стиля элемента через заданное время""

Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

// Пример использования функции
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"
*/

function changeStyleDelayed(elementId, delay) {
  setTimeout(() => {
    const element = document.getElementById(elementId);
    if (element) {
      // Измените стиль элемента по вашему усмотрению
      element.style.backgroundColor = "lightblue";
      element.style.color = "white";
      element.style.fontSize = "20px";
    } else {
      console.error(`Element with id "${elementId}" not found`);
    }
  }, delay);
}

// Пример использования функции
changeStyleDelayed("myElement", 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'
