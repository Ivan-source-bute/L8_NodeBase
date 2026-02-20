const fs = require('fs');

function writeData(filePath, text) {
    fs.writeFile(filePath, text, 'utf8', (err) => {
        if (err) {
            console.error("Ошибка записи:", err.message);
            return;
        }
        console.log("Файл успешно записан");
    });
}

function readData(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch (err) {
        console.error("Ошибка чтения:", err.message);
    }
}

function removeNoise(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return console.error(err.message);

        const result = data.replace(/[0-9]/g, '').toLowerCase();

        fs.writeFile(filePath, result, (err) => {
            if (err) console.error(err.message);
            else console.log("Файл очищен от шума");
        });
    });
}

function createDir(dirName) {
    if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName);
        console.log("Папка создана");
    }
}

module.exports = {
    writeData,
    readData,
    removeNoise,
    createDir
};