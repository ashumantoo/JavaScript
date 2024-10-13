import axios from 'axios';
import * as fs from 'node:fs/promises';

const response = await axios.get('https://jsonplaceholder.typicode.com/users');
if (response && response.data) {
    console.log('Successfully retrieved our list of users');
    let userList = "";
    response.data.forEach((user, index) => {
        userList += `${index + 1}. ${user['name']}, ${user['email']}\n`;
    });
    await fs.writeFile('asyncAwaitMovies.csv', userList);
    console.log('Saved our list of movies to promiseMovies.csv');
}