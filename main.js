let person = {
  name: 'Brent',
  age: 30,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',

  sayHello: function() {
    return `Hello, my name is ${this.name}`;
  },

  sayGoodbye() {
    return 'Goodbye!';
  }

};

console.log(person.sayHello());

person.hobbies = ['Playing Guitar', 'Cycling'];
person.hobbies = ['Playing Guitar'];
console.log(person.hobbies);


console.log(person['name']);
console.log(person['age']);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);
