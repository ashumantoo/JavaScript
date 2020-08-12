/*******************************************
*Loop and Iteration
*/

//for Loop
for(var i = 0; i <= 20; i++){
  console.log(i);
}

var john = ['John','Smith',1990,'designer',false,'blue'];

for(var i=0; i<= john.length; i++){
  console.log('For Loop ---------->',john[i]);
}

//while loop
var i = 0;
while (i< john.length) {
  console.log('While loop --------->',john[i]);
  i++;
}

//continue and break statements
for(var i=0;  i< john.length; i++){
  if (typeof john[i] !== 'string') continue;
  console.log('Continue --------->',john[i]);
}

for(var i=0;  i< john.length; i++){
  if (typeof john[i] !== 'string') break;
  console.log('Break ----------->',john[i]);
}

//Looping Backward
for(var i=john.length - 1; i>=0; i-- ){
  console.log('Looping backward----->',john[i]);
}
