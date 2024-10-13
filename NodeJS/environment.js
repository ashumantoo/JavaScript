/*******************************************************************************************************************
 * --> Environment variables are key-value data stored outside of a program and provided by the OS.
 * --> These variables are typically defined by either system or user.
 * --> They are available to all running processes for configuration or state purposes
 * --> We can get all the defined Environment variables from process.env
 * --> The env object stores all the environment variables that are available when Node.js is running the program.
 */


//Accessing Environment Variables
console.log(process.env);

//Accessing A Specific Environment Variables
console.log(process.env['HOME']);
console.log(process.env['USER']);