const os = require('os');
const path = require('path');
// Подключаем dotenv, указывая точный путь к файлу в корне
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

function getOsInfo() {
    // Проверка режима доступа
    const mode = process.env.MODE;
    
    if (mode !== 'admin') {
        console.log(`Доступ ограничен. Текущий режим: ${mode}. Для работы нужен admin.`);
        return;
    }

    // Собираем данные
    const freeGB = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);

    console.log("--- Информация о системе ---");
    console.log(`Платформа: ${os.platform()}`);
    console.log(`Свободная память: ${freeGB} GB`);
    console.log(`Главная директория: ${os.homedir()}`);
    console.log(`Имя хоста: ${os.hostname()}`);
    
    // Проверка на 4ГБ
    if (Number(freeGB) > 4) {
        console.log("✅ Памяти достаточно (более 4ГБ)");
    } else {
        console.log("⚠️ Маловато памяти (менее 4ГБ)");
    }
}
// Проверяем, какой режим загрузился из системных файлов
console.log("-----------------------------------------");
console.log(`🚀 ТЕКУЩИЙ РЕЖИМ: ${process.env.MODE}`);
console.log("-----------------------------------------");

// Дальше идет ваш старый код (Студент: Артем Бобров и т.д.)
getOsInfo();