import axios from 'axios';
import * as fs from 'node:fs/promises';

axios.get('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    console.log('Successfully retrieved our list of users');
    let userList = "";
    response.data.forEach((user, index) => {
      userList += `${index + 1}. ${user['name']}, ${user['email']}\n`;
    });
    return fs.writeFile('promiseMovies.csv', userList);
  }).then(() => {
    console.log('Saved our list of movies to promiseMovies.csv');
  })
  .catch((error) => {
    throw error;
  });
