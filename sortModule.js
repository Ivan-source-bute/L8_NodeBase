function sortWithoutSpaces(arr) {
    return arr.sort((a, b) => {
        return a.trim().localeCompare(b.trim());
    });
}

module.exports = { sortWithoutSpaces };