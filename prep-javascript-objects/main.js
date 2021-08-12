var person = {
  firstName: 'Christine Tina',
  lastName: 'Park',
  hobby: 'acting'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
var sentence = "The person's name is: " + fullName + '.';
console.log(sentence);
person.job = 'coder';
console.log("The person's current job is: " + person.job + '.');
person.previousJob = 'business manager';
console.log("The person's previous job is: " + person.previousJob + '.');
console.log('The complete person object:');
console.log(person);
