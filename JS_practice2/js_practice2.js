// // - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let array1 = ['a', 'b', 'c'];
// for (i=1; i<=3 ; i+=1){array1.push(i)&&console.log(array1)}
//
// // - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let array2 = [1, 2, 3];
// console.log(array2.reverse());
//
// // 3. - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let array3 = [1, 2, 3];
// array3.push(4);
// array3.push(5);
// array3.push(6);
// console.log(array3);
//
// // 4.- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let array4 = [1, 2, 3];
// array4.unshift(4);
// array4.unshift(5);
// array4.unshift(6);
// console.log(array4);
//
// // 5. Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let array5=['js', 'css', 'jq'];
// console.log(array5.shift(1));
//
// // 6. Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let array6=['js', 'css', 'jq'];
// console.log(array5.pop(array6.length));

// 7. - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let array7 = [1, 2, 3, 4, 5];
// console.log(array7.slice(3, 5));

// 8. - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let array8 = [1, 2, 3, 4, 5];
// console.log(array8.slice(0, 2));

for (let min = 0; min < 2; min++) {
    for (let sec = 0; sec < 60; sec++) {
        console.log('min:', min);
        console.log('sec', sec);
    }

}