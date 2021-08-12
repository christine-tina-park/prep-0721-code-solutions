function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
console.log('addTwoNumbers(3,3): ' + addTwoNumbers(3, 3));

function convertHoursToMinutes(hours) {
  return hours * 60;
}
console.log('convertHoursToMinutes(4.5): ' + convertHoursToMinutes(4.5));

function getGreeting(name) {
  return '"' + name + ' rock!"';
}
console.log("getGreeting('You'): " + getGreeting('You'));

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
console.log('addMultiplyBy5(2,11): ' + addAndMultiplyBy5(2, 11));

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}
console.log('multiplyAndDivideBy5(2,20): ' + multiplyAndDivideBy5(2, 20));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
console.log('subtractTwoNumbers(100,200): ' + subtractTwoNumbers(100, 200));

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
console.log('getCircleCircumference(3): ' + getCircleCircumference(3));

function getFullName(firstName, lastName) {
  return '"' + firstName + ' ' + lastName + '"';
}
console.log("getFullName('Gong', 'Yoo'): " + getFullName('Gong', 'Yoo'));

function cube(number) {
  return number ** 3;
}
console.log('cube(11): ' + cube(11));
