async function fetchUsers() {
    const result = {
        data: [],
        isLoading: true,
        error: null
    };

    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await res.json();
        result.data = json;
    } catch (error) {
        result.error = error.message;
    }

    result.isLoading = false;
    return result;
}

module.exports = { fetchUsers };