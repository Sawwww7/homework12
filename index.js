////////////////////////////////////////////////////////////////////////////
/*Вам необхідно написати функцію summarize(num),
 яка приймає на вхід число і повертає функцію, 
 яка під час виклику додає це число до аргументу і повертає результат.
Якщо аргумент не передано, то додається одиниця. 
Наприклад, якщо функція викликається з аргументом 5, то функція, 
що повертається, повинна при виклику з аргументом 3 повернути 8 (тому що 3 + 5 = 8) або 6,
якщо аргумент не буде передано.*/
//////////////////////////////////////////////////////////////////////////
function summarize(num) {
  return function summ (n = 1) {   
    return n + num;
  };   
}
const summ=summarize(5)

console.log(summ(3)) //8
console.log(summ()) //6
///////////////////////////////////////////////////////////////
/*Вам необхідно написати функцію counter(startValue, step), 
яка приймає на вхід два параметри - стартове значення лічильника і його крок. 
Функція повертає нову функцію, яка при кожному виклику збільшує лічильник на значення
і повертає його поточне значення. Лічильник повинен мати методи increment, decrement і reset,
які збільшують або зменшують значення на step і скидають значення до стартового, відповідно.*/
////////////////////////////////////////////////////////////////////////

function counter(startValue, step) {
  let count = startValue;
  function increment() {
    return (count = count + step);
  }
  function decrement() {
    return (count = count - step);
  }
  function reset() {
    return (count = startValue);
  }

  return [increment, decrement, reset];
}

const [increment, decrement, reset] = counter(2, 3);

console.log(increment()); //5
console.log(increment()); //8
console.log(decrement()); //5
console.log(increment()); //8
console.log(reset()); //2


//////////////////////////////////////////////////////////////////////////
/*Вам необхідно написати функцію sequence(fn, fn), яка приймає на вхід дві або більше функції
і повертає нову функцію, яка викликає їх послідовно з результатом попереднього виклику.
Результат останньої функції має бути повернутий новою функцією. Кожна функція повинна 
мати доступ до результату попередньої функції через замикання.*/
//////////////////////////////////////////////////////////////////////////
function ferst(a) {
  return a + 3;
}
function second(b) {
  return b + 8;
}
function theFollowing(c) {
  return c + 9;
}

function sequence() {
  const argum = [...arguments];
  
  return function general() { 
    let result=0 
    argum.forEach((element) => {
      result=element(result)
      //console.log(result)     
    });
    return result   
  }
}

const general = sequence(ferst, second, theFollowing);
console.log(general());    //20
///////////////////////////////////////////////////////////////////////////