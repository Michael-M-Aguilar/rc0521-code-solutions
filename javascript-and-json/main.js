var trial = [
  {
    isbn: '978-0060850524',
    title: 'Brave New World',
    author: 'Aldous Huxley'
  },
  {
    isbn: '978-1443434973',
    title: 'Nineteen Eighty-Four',
    author: 'George Orwell'
  },
  {
    isbn: '978-0812988529',
    title: 'Slaughterhouse-Five',
    author: 'Kurt Vonnegut'
  }
];
console.log('list of isbn, titles, and authors: ', trial);
console.log('typeof trial: ' + typeof trial);
console.log('Converted objects to JSON string: ', JSON.stringify(trial));
console.log('typeof JSON Stringify: ' + typeof JSON.stringify(trial));

var studentInfo = '{"numberId": 1005030, "studentName": "Michael Aguilar"}';
console.log("The student's ID and Name: " + studentInfo);
console.log('typeof studentInfo: ' + typeof studentInfo);
var studentObject = JSON.parse(studentInfo);
console.log('studentObject consoled: ', studentObject);
console.log('typeof studentObject: ', typeof studentObject);
