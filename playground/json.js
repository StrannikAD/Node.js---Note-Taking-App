// var obj = {
//   name: 'Anna'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Anna","age": 25}';
// var person = JSON.parse(personString) //changes the JSON from string/array to object
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title: 'A title',
  body: 'Some body'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);