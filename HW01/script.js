/** 
Домашнее задание

1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
*/
const arr = [1, 5, 7, 9];

console.log(Math.min(...arr));// 1

/*
2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
*/
function createCounter() {
    return {
        count: 0,
        increment() {
            this.count++;
            console.log(this.count);
        },
        decrement() {
            this.count--;
            console.log(this.count);
        }
    };
}

const counter = createCounter();
counter.increment(); // 1
counter.decrement(); // 0
counter.decrement(); // -1


/*
3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
 */

function findElementByClass(root, className) {
    // Проверяем, есть ли у текущего элемента указанный класс
    if (root.classList && root.classList.contains(className)) {
        return root;
    }

    // Рекурсивно проверяем все дочерние элементы
    for (let i = 0; i < root.children.length; i++) {
        const found = findElementByClass(root.children[i], className);
        if (found) {
            return found;
        }
    }

    // Если элемент с указанным классом не найден, возвращаем null
    return null;
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
