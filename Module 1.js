Module 1
1.;
console.log('I\'m printing to console!');

2.;
let name = prompt('Enter user name.');
document.querySelector('#target').innerHTML = 'Hello, ' + name + '!';

3.;
let num1 = parseInt(prompt('Enter number:'));
let num2 = parseInt(prompt('Enter number:'));
let num3 = parseInt(prompt('Enter number:'));
let sum = num1 + num2 + num3;
let product = num1 * num2 * num3;
let average_num = (num1 + num2 + num3) / 3;
document.querySelector('#target').innerHTML = 'The sum is ' + sum + '.' +
    'The product is ' + product + '.' +
    'The average numer is ' + average_num + '.';

4.;
let name = prompt('Enter your name: ');
const random = Math.floor(Math.random() * 4 + 1);
document.write(' The value is ' + random + '! ');
if (random == 1) {
  document.querySelector('#target').innerHTML = name + ', you are Gryffindor.';
} else if (random == 2) {
  document.querySelector('#target').innerHTML = name + ', you are Slytherin.';
} else if (random == 3) {
  document.querySelector('#target').innerHTML = name + ', you are Hufflepuff.';
} else {
  document.querySelector('#target').innerHTML = name + ', you are Ravenclaw.';
}

5.;
let year = parseInt(prompt('Enter one year: '));
if (year % 4 != 0) {
  document.querySelector('#target').innerHTML = year + ' is not leap year.';
} else if (year % 4 == 0 && year % 100 != 0) {
  document.querySelector('#target').innerHTML = year + ' is leap year.';
} else if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
  document.querySelector('#target').innerHTML = year + ' is leap year.';
} else {
  document.querySelector('#target').innerHTML = year + ' is not leap year.';
}

6.;
if (confirm('Should I calculate the square root?') == true) {
  let num = parseInt(prompt('Enter number: '));
  if (num >= 0) {
    let root = Math.sqrt(num);
    document.querySelector('#target').innerHTML = 'The square root of ' + num +
        ' is ' + root + '.';
  } else {
    document.querySelector(
        '#target').innerHTML = 'The square root of a negative number is not defined.';
  }
} else {
  document.querySelector(
      '#target').innerHTML = 'The square root is not calculated.';
}

7.;
let dice = parseInt(prompt('Enter number of dice: '));
let roll = parseInt(prompt('Enter number of roll: '));
let sum = 0;
for (let i = 0; i < roll; i += 1) {
  let result = Math.floor(Math.random() * dice + 1);
  let time = i + 1;
  sum += result;
}
document.querySelector('#target').innerHTML = ' The sum of ' + roll +
    ' times rolls is  ' + sum + '.';

8.;
let start_year = parseInt(prompt('Enter start year:  '));
let end_year = parseInt(prompt('Enter end year:  '));
const leap_year = [];
for (let year = start_year; year <= end_year; year += 1) {
  if (start_year % 4 == 0 && start_year % 100 != 0) {
    leap_year.push(year);
  } else if (start_year % 4 == 0 && start_year % 100 == 0 && start_year % 400 ==
      0) {
    leap_year.push(year);
  }
  start_year += 1;
}
for (let i = 0; i < leap_year.length; i += 1) {
  document.querySelector('#target').innerHTML = '<li>' + leap_year[i] + '</li>';
}
