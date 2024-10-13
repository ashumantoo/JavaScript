/****************************************************************************************************************
 *                                                callback
 * --> callback: callback is a function which is passed as an argument to another function, and then executed when
 *               the other function is finished.
 * --> We use callback to make sure that code is executed only after the asynchronous code gets completed. 
 */

import request from 'request';
import * as fs from 'node:fs';

request('https://jsonplaceholder.typicode.com/users', (error, response, body) => {
  if (error) {
    console.error(`Could not send request to API: ${error.message}`);
    return;
  }

  if (response.statusCode != 200) {
    console.error(`Expected status code 200 but received ${response.statusCode}.`);
    return;
  }
  console.log('Processing our list of users');
  let users = JSON.parse(body);
  let userList = "";
  users.forEach((user, index) => {
    userList += `${index + 1}. ${user['name']}, ${user['email']}\n`;
  });
  fs.writeFile('callbackUsers.csv', userList, (error) => {
    if (error) {
      console.error(`Could not save the users to a file: ${error}`);
      return;
    }

    console.log('Saved our list of users to callbackUsers.csv');;
  });
});
