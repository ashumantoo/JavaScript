const posts = [
  { title: 'post one', body: 'This is the first post' },
  { title: 'post two', body: 'This is the second post' }
];


//Asynchronous nature of the javascript
/**
 * Here this piece of code behave in asynchronous way means before calling the createPost() 
 * Its call the getPost(). Becasue the createPost() taking more time to create a post than getPost() to get the post
 * So the getPost() would not wait for createPost().
 */
function getPost() {
  setTimeout(() => {
    for (let index = 0; index < posts.length; index++) {
      const element = posts[index];
      console.log(element);
    }
  }, 2000);
}
// getPost();

function createPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 3000);
}
// createPost({ title: 'post three', body: 'This is third post' });


//Callbacks
/*
* So Making this piece of code working in a way of synchronous code we could make the createPost() as callback function
* So this piece of code call the getPost() only as soon as the createPost() finishes.
*/
function createPostCallback(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 3000);
}
// createPostCallback({ title: 'post three', body: 'This is third post' }, getPost);


//Promises
function createPostPromise(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const err = false;
      if (!err) {
        resolve();
      } else {
        reject('Something went wrong');
      }
    }, 3000);
  });
}
// var promisePost = createPostPromise({ title: 'post three', body: 'This is third post' });
// promisePost.then(() => {
//     getPost();
// }).catch((error) => {
//     console.log(error);
// });




//Promise.all
const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'Goodbye');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  // console.log(values);
});



// console.log('start')
// let a;
// console.log(myFunction)
// function myFunction() {
//     console.log(a)
//     a = 10
//     console.log(a)
// }
// myFunction()
// setTimeout(() => {
//     console.log("timeout")
// }, 0)
// fetch(/* some url */)
//     .then(() => {
//         console.log(response.json()
// })
// console.log('end'))



// const User = {
//     name: 'ABC',
// };
// const User1 = {
//     name: 'XYZ',
// };
// function printName(age, city) {
//     console.log(this.name, age, city);
// }
// const boundedPrintName = printName.bind(User);
// const boundedNewPrintName = boundedPrintName.bind(User1);
// boundedNewPrintName(26, 'Pune');


// calculate.add(5).multiple(5).substract(3).divide(11).value() //output 2


// let a = {}
// let b = { key: 'b' }
// let c = { key: 'c' }
// a[b] = 78
// a[c] = 34
// console.log(a[b])
