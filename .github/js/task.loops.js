// 1. Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
//початкове значення кінцеве значення, а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
//let arr = createArray(2, 9);
//console.log(arr); // [2,3,4,5,6,7,8,9]

function createArray(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number') {
      return "Both start and end values must be numbers.";
    }
  
    if (start > end) {
      return "Start value should be less than or equal to end value.";
    }
  
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
  
    return result;
  }

  
  
// 2. Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.
// 1,2,2,3,3,3...


function printNumbersWithRepetition(a, b) {
    for (let i = a; i <= b; i++) {
      for (let j = 1; j <= i; j++) {
        console.log(i);
      }
    }
  }
  
//3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
//randArray(5);  // [399,310,232,379,40]

function randArray(k) {
    let result = [];
    for (let i = 0; i < k; i++) {
      const randomNumber = Math.floor(Math.random() * 500);
      result.push(randomNumber);
    }
    return result;
  }

//4. Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
//приклад:
//const arr = [5, 3, 4, 5,6,7,3];
//const arr2 = compact(arr);
//console.log(arr2) ; // [5,3,4,6,7]

function compact(arr) {
  const uniqueArr = [];
  for (const element of arr) {
    if (!uniqueArr.includes(element)) {
      uniqueArr.push(element);
    }
  }
  return uniqueArr;
}

// 5. Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
//Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
//let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
//let arrNew = funcName(arr);
/* 
[
[5, 12, 99, 2, 2, 4, 3],
[”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”]
] 
*/

function splitByType(arr) {
  let result = [];
  let currentSubarray = [];
  let currentSubarrayStr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      currentSubarray.push(arr[i]);
    } else {
      currentSubarrayStr.push(arr[i]);
    }
  }

  result.push(currentSubarray);
  result.push(currentSubarrayStr);

  return result;
}

//6. Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.
// calc(10, 3, 1); // => 7

function calc(a, b, op) {
  switch (op) {
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      if (b !== 0) {
        return a / b;
      } else {
        return "Ділення на нуль неможливе";
      }
    default:
      return a + b;
  }
}

// 7. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
//findUnique([1, `2`, 3, 5, 3]);  // => false
//findUnique([1, 2, 3, 5, 11]); // => true

function findUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        if (i !== j) {
          return false;
        }       
      }
    }
  }
  return true;
}