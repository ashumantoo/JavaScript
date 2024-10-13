/**************************************************************************************************************
 * Retrieving An Argument in Response to User Input
 * 
 */
//cmd: node echo.js HOME
const args = process.argv.slice(2);
console.log("1:", args[0]);
console.log("2:", process.env[args[0]]);


//Viewing Multiple Environment Variables
//cmd : node echo.js HOME PWD
args.forEach((arg, index) => {
  const envVar = process.env[arg];
  if (!envVar) {
    console.error(`Could not find "${arg}" in environment`);
  } else {
    console.log(`3:${index}`, envVar);
  }
});