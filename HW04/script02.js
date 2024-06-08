/*
Задачи:

Задача 1:
Необходимо получить список всех пользователей с помощью бесплатного 
API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. 
Пользователь должен иметь возможность удалить любого пользователя из списка.
*/

const urlUsers = "https://jsonplaceholder.typicode.com/users";

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    return users;
  } catch (error) {
    console.log("catch: " + error);
    return;
  }
};

const users = await getData(urlUsers);
const userList = document.querySelector("div.user-list");

users.forEach((user) => {
  const userElement = document.createElement("div");
  userElement.className = "user";
  userElement.innerHTML = `
      <p>${user.name}</p>
      <button class="delete">delete</button>
    `;

  userElement.querySelector(".delete").addEventListener("click", () => {
    userElement.remove();
  });

  userList.appendChild(userElement);
});

/*
Задача 2:
Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды. 

*/

const urlDogs = "https://dog.ceo/api/breeds/image/random";

const dogs = await getData(urlDogs);
const dogList = document.querySelector("div.dog-list");

const fetchDogImage = async () => {
  try {
    const response = await fetch(urlDogs);
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error("Error fetching dog image:", error);
    return null;
  }
};

const displayDogImage = async () => {
  const imageUrl = await fetchDogImage();
  if (imageUrl) {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Dog";
    img.className = "dog-image";
    dogList.appendChild(img);
  }
};

let imageCount = 0;
const maxImages = 10;
const intervalTime = 3000; // 3 seconds

const intervalId = setInterval(() => {
  if (imageCount < maxImages) {
    displayDogImage();
    imageCount++;
  } else {
    clearInterval(intervalId);
  }
}, intervalTime);

displayDogImage();
imageCount++;
