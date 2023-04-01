export default async function getAllUsers() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')

    if (!data.ok) throw new Error('failed to fetch data')

    return data.json()
}