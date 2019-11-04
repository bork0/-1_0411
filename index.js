// second task
let surname = 'Babelashvili';
console.log(surname);

// third task
let firstVariable;
let secondVariable;
firstVariable = `I'm the first one`;
secondVariable = 2;

let newDiv = document.createElement('div');
let newParagraph = document.createTextNode(`firstVariable is ` + firstVariable);
newDiv.appendChild(newParagraph);

let anotherNewDiv = document.createElement('div');
let anotherNewParagraph = document.createTextNode(`secondVariable is ` + secondVariable);
anotherNewDiv.appendChild(anotherNewParagraph);

firstVariable = secondVariable;

let equalVariablesDiv = document.createElement('div');
let equalVariables = document.createTextNode(`firstVariable is ` + firstVariable + ` and the secondVariable is ` + secondVariable);
equalVariablesDiv.appendChild(equalVariables);

document.body.appendChild(newDiv);
document.body.appendChild(anotherNewDiv);
document.body.appendChild(equalVariablesDiv);

// fourth task
let isAdult = confirm('Are you at least 18 years of age?');
console.log(isAdult);

// fifth task
let firstName = 'Borys';
let age = 21;
let group = 'Lv-456.JS Core';
let birthdate = '24/05/1998';
let married = false;
let inRelationship = true;
let hobby = 'Photography'
hobby = null;
let keepSecrets;

console.log(typeof age, typeof married, typeof inRelationship, typeof firstName, typeof surname, typeof group, typeof birthdate,
    typeof hobby, typeof keepSecrets);

let profile = {
    name: 'Elon',
    surname: 'Musk',
    age: 48,
    birthdate: '28/06/1971',
    married: false,
    divorced: true,
    hobby: 'philanthropy, innovations',
    companies: 'PayPal, Tesla, Space X, SolarCity, The Boring Company and many more',
    forbesPosition: 40,
    hair: 'bold',
    hair: null
}

console.log(profile, typeof profile)
console.log(typeof profile.age, typeof profile.forbesPosition, typeof profile.married, typeof profile.divorced, typeof profile.name,
    typeof profile.surname, typeof profile.birthdate, typeof profile.hobby, typeof profile.companies, typeof profile.hair);

// sixth task
let nicknameInfo = prompt('Please enter your nickname');
let emailInfo = prompt('Please enter your email');
let passwordInfo = prompt('Please enter your password');

let collectedInfo = alert('Dear ' + nicknameInfo + ', your email is ' + emailInfo + ' and your password is ' + passwordInfo);

// seventh task
let secondsInHour = 60 * 60;
let secondsInDay = 24 * 60 * 60;
let secondsInMonth = 31 * 24 * 60 * 60;

console.log(`There are ${secondsInHour} seconds in one hour, ${secondsInDay} seconds in one day and ${secondsInMonth} seconds in one month that lasts 31 days or ${secondsInMonth - secondsInDay} seconds in case there are 30 days in month.
There are ${secondsInMonth - 3*secondsInDay} seconds in February if it isn't a leap year. Otherwise there are ${secondsInMonth - 2*secondsInDay} seconds.`);