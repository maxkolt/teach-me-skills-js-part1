/**
 * Напишите логику, которая умножает все числовые свойства объекта obj на переменную num.
 */
function task1(num) {
    const obj = {
        name: 'Valera',
        age: 20,
        height: 300,
        weight: 30,
        surname: 'Trololo',
    };
    // ваш код должен быть ниже этой строки
    let values = Object.values(obj);

    for(x=0; x < values.length; x++){
        let current = values[x];
        if( !isNaN(parseFloat(current)) && isFinite(current)){
            let result = current * num;
            console.log(result);
        }
    }
    // ваш код должен быть выше этой строки
    return obj;
}
task1(5);

/**
 * Напишите код для суммирования всех значений из obj и сохраните результат в переменной sum.
 */
function task2(num) {
    let sum = null;
    const obj = {
        a: 20,
        b: 10,
        c: 50,
        d: 1,
        e: 5,
    };
    // ваш код должен быть ниже этой строки
    for (const key in obj) {
        sum += obj[key];
    }
    // ваш код должен быть выше этой строки
    return sum;
}
console.log(task2());

/**
 * Напишите код для проверки на существование свойства в объекте. Если свойство property существует в obj,
 * то функция должна возвращать true, в противном случаи false
 */
function task3(obj, property) {
    let result = null;
    // ваш код должен быть ниже этой строки
    return property in obj;
    // ваш код должен быть выше этой строки
}
const key = 'рост';
const notOk = 'NOT_OK';
const value =  185
const obj = { 'рост' : value };
const okString = task3(obj, key);
console.log(okString);
const notOkString  = task3(obj, notOk);
console.log(notOkString );

/**
 * Написать логику, что скопирует все свойства из obj в result.
 */
function task4(obj) {
    const result = {};
    // ваш код должен быть ниже этой строки
    for (const key in obj) {
        result[key] = obj[key];
    }
    // ваш код должен быть выше этой строки
    return result;
}
console.log(task4({age: '25', name: 'leon'}));

/**
 * Ваша реализацимя должна проверить в каком объекте obj1 или obj2 свойств больше, в переменную result
 * положите 1 или 2 в зависимости в каком объекте свойств больше
 */
function task5(obj1, obj2) {
    let result = null;
    // ваш код должен быть ниже этой строки

    // ваш код должен быть выше этой строки
    return result;
}

/**
 * Написать логику, которая должна удалять все свойства из объекта obj.
 */
function task6(obj) {
    // ваш код должен быть ниже этой строки

    // ваш код должен быть выше этой строки
    return obj;
}

/**
 * Задание с *.
 * Написать цикл (не for..in), который пройдется по объекту obj и выведет все значения в консоль
 */
function task7(obj) {
    // ваш код должен быть ниже этой строки

    // ваш код должен быть выше этой строки

    for (/* написать условие */) {
        console.log();
    }
}

/**
 * Задание с *.
 *  В функции есть 2 аргумента, объект и строка. Написать логику, чтобы их сумма была такого вида:
 obj = {}
 str = "Vitalik"
 Значит результат должен быть "Hello Vitalik"
 Или
 obj = {}
 str = "Katya"
 Результат: "Hello Katya"
 */
function task8(obj, str) {
    let result = null;
    // ваш код должен быть ниже этой строки

    // ваш код должен быть выше этой строки
    return result;
}

/**
 * Задание с *.
 * Все аргументы функции должны добавляться в массив.
 */
function task9() {
    const array = [];
    // ваш код должен быть ниже этой строки

    // ваш код должен быть выше этой строки
    return array;
}
