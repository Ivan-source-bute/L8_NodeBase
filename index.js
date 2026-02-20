require('dotenv').config();
console.log(`Студент: ${process.env.NAME} ${process.env.SURNAME}, Группа: ${process.env.GROUP}`);

const myFs = require('./myFs');

// Попробуем создать папку и файл с "шумом"
myFs.createFolder('test_data');
myFs.writeFile('./test_data/notes.txt', 'HELLO World 123! This IS Node.js 2026');

// Подождем секунду, чтобы файл успел записаться, и почистим его
setTimeout(() => {
    myFs.cleanFileNoise('./test_data/notes.txt');
}, 1000);