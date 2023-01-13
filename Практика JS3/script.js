'use strict';
// Домашнее задание
// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты
// Переменные: years myDog guests
// Функции: dogYears makeTea secret
// Встроенные функции: dogYears(myDog, 4); makeTea(guests, 'Earl Grey'); secret();
// Аргументы: (myDog, 4) (guests, 'Earl Grey') ()
// Параметры: (dogname, age) (cups, tea) secret()
// function dogYears(dogname, age){
//     let years = age * 2;
//     console.log(dogName + ' is ' + years + ' years old');
// }
// let myDog = 'Rex';
// dogYears(myDog, 4);

// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// let guests = 2;
// makeTea(guests, 'Earl Grey');

// function secret(){
//     console.log('The secret of life is 28');
// }
// secret();


// Дана строка 'JS'. Сделайте из нее строку 'js'.
let txt1 = 'JS';
console.log('1)',txt1.toLowerCase());

// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).
let txt2 = 'я люблю JS!';
console.log('2)',txt2.substr(2, 5), txt2.substr(8,2));
console.log(txt2.substring(2, 7), txt2.substring(8,10));
console.log(txt2.slice(2, 7), txt2.slice(8,10));

// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.
let txt3 = 'я люблю JS!';
console.log('3)',txt3.indexOf('люблю'));

// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.
let txt4 = 'Hello, world!',
n = 6,
result; 
if (txt4.length > n){
    result = txt4.slice(0,n);
    console.log('4)',result + '...');
}else {
    result = txt4;
    console.log('4)',txt4);
}

// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.
let txt5 = 'Я-люблю-JS!';
console.log('5)',txt5.replace(/-/g, '!'));

// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.
let txt6 = 'я люблю JS';
console.log('6)',txt6.split(' '));

// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.
let txt7 = 'привет мир';
console.log('7)',txt7.split(''));