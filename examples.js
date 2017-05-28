console.log('Starting app.js');

// tells node that you want to
// fetch all of the contents of
// the fs module and store it
// in a variable called 'fs'.
const fs = require('fs');
const os = require('os');
const _ = require('lodash')
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Anna'));
var filteredArray = _.uniq(['Anna', 1, 'Anna', 1, 2, 3, 4])
console.log(filteredArray);

// var res = notes.addNote();
// console.log(res);

// console.log('Result', notes.add(9, -5));

// var user = os.userInfo();

// if txt file does not exist,
// running the app in node creates
// the txt file automatically.
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);