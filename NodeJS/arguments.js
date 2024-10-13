/**************************************************************************************************************************
 * --> process : process in nodejs is a global object that contains functions and data all related to the currently running
 *               nodejs process.
 * 
 * --> argv : argv property is the array of strings that contains all the command line arguments given to the a program.
 * 
 * --> The first argument in the "process.argv" array is always the location of the Node.js binary that is running the program. 
 *    - The second argument is always the location of the file being run. 
 *    - The remaining arguments are what the user entered e.g 
 *       node arguments.js ashutosh <-- this is a command to run this file along with some user input which is "ashutosh" here
 */
console.log(process.argv.slice(2)); //by using slice method of process.argv here we are just logging the user input value


/*
cmd node arguments.js
output -  [
  '/home/ashutosh/.nvm/versions/node/v20.17.0/bin/node',
  '/home/ashutosh/Personal/NodeJS/arguments.js'
] 
*/

/*
cmd node arguments.js ashutosh
output -  [
  '/home/ashutosh/.nvm/versions/node/v20.17.0/bin/node',
  '/home/ashutosh/Personal/NodeJS/arguments.js',
  'ashutosh'
] 
*/
console.log('1:',process.argv)


/*
cmd node arguments.js ashutosh mantoo
output -  [
  'ashutosh',
  'mantoo'
] 
*/
console.log('1:',process.argv.slice(2))