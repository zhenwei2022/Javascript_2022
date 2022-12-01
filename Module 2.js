1.;
let array = [];
let time = 1;
while (time <= 5) {
  let num = parseInt(prompt('Enter number:'));
  array.push(num);
  time += 1;
}
console.log('The input array is ' + array + '.');
for (let i = 4; i >= 0; i -= 1) {
  console.log(array[i]);
}

2.;
let array = [];
let num = parseInt(prompt('Enter number participants: '));
let time = 0;
while (time < num) {
  let str_name = prompt('Enter name participants: ');
  array.push(str_name);
  time += 1;
}
array.sort();
console.log(array);
var tx = '';
for (var i = 0; i < array.length; i++) {
  tx += '<li>' + array [i] + '<br>';
  olist.innerHTML = tx;
}

3.;
let array = [];
let time = 1;
while (time <= 6) {
  let name = prompt('Enter the name dogs: ');
  array.push(name);
  time += 1;
}
console.log('The names of six dogs are ' + array + '.');
array.reverse();
for (let i = 0; i <= 5; i += 1) {
  console.log('<li>' + array[i] + '</li>');
}

4.;
let array = [];
let num = parseInt(prompt('Enter number: '));
while (num !== 0) {
  array.push(num);
  num = parseInt(prompt('Enter number: '));
}
if (num === 0) {
  array.push(num);
}
array.sort(((a, b) => b - a));
console.log(array);

5.;
let array = [];
let num = parseInt(prompt('Enter the number : '));
while (array.includes(num) === false) {
  array.push(num);
  num = parseInt(prompt('Enter the number : '));
}
if (array.includes(num) === true) {
  console.log(
      'The number ' + num + ' has already been given. The array as following.');
}
array.sort(((a, b) => a - b));
console.log(array);

6.;

function dice() {
  let result = Math.floor(Math.random() * 6 + 1);
  while (result !== 6) {
    console.log('<ul>' + result + '<ul>');
    result = Math.floor(Math.random() * 6 + 1);
  }
  if (result === 6) {
    return;
  }
  return;
}

dice();

7.;

function dice(num) {
  let result = Math.floor(Math.random() * num + 1);
  while (result !== num) {
    console.log('<ul>' + result + '<ul>');
    result = Math.floor(Math.random() * num + 1);
  }
  if (result === num) {
    return;
  }
  return;
}

let num = parseInt(prompt('Enter the number of dice: '));
dice(num);

8.;

function concat(array) {
  let result = '';
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  document.querySelector('#target').innerHTML = result;
}

const name_list = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
concat(name_list);

9.;

function even(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      even_list.push(array[i]);
    }
  }
  return even_list;
}

const even_list = [];
const num_list = [2, 7, 4];
even(num_list);
console.log('The input number are ' + num_list + '.');
console.log('The even number are ' + even_list + '.');
