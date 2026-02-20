const { loadUsers } = require('./fetchModule');
const { sortStrings } = require('./sortModule');
const myFs = require('./myFs');

async function main() {
    console.log("⏳ Начинаю загрузку пользователей из интернета...");
    
    const response = await loadUsers();

    if (response.error) {
        console.error("❌ Ошибка:", response.error);
        return;
    }

    // 1. Извлекаем имена и сортируем их нашим модулем
    const names = response.data.map(user => user.name);
    const sortedNames = sortStrings(names);

    // 2. Извлекаем почту
    const emails = response.data.map(user => user.email);

    // 3. Используем ваш модуль myFs для создания папок и записи
    myFs.createFolder('users');
    
    // Записываем данные в файлы
    myFs.writeFile('./users/names.txt', sortedNames.join('\n'));
    myFs.writeFile('./users/emails.txt', emails.join('\n'));

    console.log("✅ УСПЕХ!");
    console.log("Папка 'users' создана. Имена отсортированы, почты сохранены.");
}

main();