//1. - створити функцію яка виводить масив
function myDrinks(drink = 'water', withWhat = 'without anything', when = 'during the day') {
    console.log('Every day I drink ' + drink + ' ' + withWhat + ' ' + when + '.');
}
myDrinks('coffee', 'with milk', 'in the morning');
myDrinks('tee');
myDrinks('coffee', 'without anything', 'in the afternoon');
myDrinks('wine', '', 'in the evening');

// 2. - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
function randomNumers(){
    const array = [];
    for(let i=0; i<10; i++) {
        array.push(Math.random())
    }
    console.log(array);
}

// 3. - створити функцію яка приймає три числа та виводить та повертає найменьше.
function f() {
    const array = [];

    for(let i=0; i<3; i++){
        if (array[i]<array[i+1]&array[i]<array[i+2]) {
            return array[i];
            console.log(array)
        }
    }
}

// 4. - створити функцію яка приймає три числа та виводить та повертає найбільше.
// 5. - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// 6. - створити функцію яка виводить масив
// 7. - створити функцію яка повертає найбільше число з масиву
// 8. - створити функцію яка повертає найменьше число з масиву
// 9. - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// 10. - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// 11. - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// 12. - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// 13. - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад:   [1,2,3,4] [2,3,4,5]  результат  [3,5,7,9]