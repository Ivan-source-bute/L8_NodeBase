const bcrypt = require('bcrypt');

const passwords = Array(13).fill("MasterPassword2026"); // Создаем массив из 13 паролей

console.log("Начинаю шифрование...");

passwords.forEach((pass, index) => {
    const label = `Пароль №${index + 1}`;
    console.time(label); // Начинаем отсчет времени для каждого пароля

    bcrypt.hash(pass, 10, (err, hash) => {
        if (err) throw err;
        console.timeEnd(label); // Выводим время, когда шифрование закончилось
        
        // Если это был последний пароль, выведем пояснение для лабы
        if (index === 12) {
            console.log("\n📚 Вывод о времени:");
            console.log("Время может отличаться, так как Node.js использует пул потоков libuv.");
            console.log("Тяжелые задачи распределяются по ядрам процессора, а не выполняются мгновенно.");
        }
    });
});