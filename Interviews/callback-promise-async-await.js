/*******************************************************************************************************
 *  --- callback: callback is a fucntion which takes function as an argument and then get invoked inside 
 *                the outer function to complete some kind of asynchronous task or action.
 * 
 */

const userData = [
  { id: 1, name: "Jonh", email: "john@gmail.com", age: 30 },
  { id: 2, name: "Mark Wood", email: "mark@gmail.com", age: 28 }
]

const purchasedBooks = [
  { id: 1, name: "You don't know JS", year: 1999, completed: false, userId: 1 },
  { id: 2, name: "ReactJS Handbook", year: 2010, completed: true, userId: 1 },
  { id: 2, name: "First step with NodeJS", year: 2008, completed: true, userId: 2 }
]


//callback
const getUserByEmail = function (email, callback) {
  setTimeout(() => {
    let existingUser = userData.find((user) => user.email === email);
    if (existingUser) {
      callback(null, existingUser);
    } else {
      callback("No user found with the given userId")
    }
  }, 1000);
}

const getUserPurchasedBooks = (userId, callback) => {
  setTimeout(() => {
    let books = purchasedBooks.filter((pb) => pb.userId === userId);
    if (books) {
      callback(null, books)
    } else {
      callback("User haven't purchased any book")
    }
  }, 2000);
}

getUserByEmail("john@gmail.com", function (err, user) {
  if (err) {
    throw new Error(err);
  }
  console.log("callback - userData: ", user);
  if (user) {
    getUserPurchasedBooks(user.id, (err, books) => {
      if (err) {
        throw new Error(err);
      }
      console.log("callback - books: ", books)
    })
  }
});


//Promises
const getUserByEmailPromise = function (email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let existingUser = userData.find((user) => user.email === email);
      if (existingUser) {
        resolve(existingUser);
      } else {
        reject("No user found with the given userId")
      }
    }, 1000);
  })
}

const getUserPurchasedBooksPromise = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let books = purchasedBooks.filter((pb) => pb.userId === userId);
      if (books) {
        resolve(books)
      } else {
        reject("User haven't purchased any book")
      }
    }, 2000);
  })
}

//Normal way of calling dependent Promise call one after the other
getUserByEmailPromise("john@gmail.com")
  .then((user) => {
    console.log("Promise - userData: ", user);
    getUserPurchasedBooksPromise(user.id)
      .then((books) => {
        console.log("Promise - booksData: ", books)
      })
      .catch((err) => {
        throw new Error(err);
      })
  }).catch((err) => {
    throw new Error(err)
  });


//Promise chaining - diff here is we are returning a new promise once the current promise get resolve
// and it will be chain to the next dependent promise
getUserByEmailPromise("john@gmail.com")
  .then((user) => {
    console.log("Promise chaining - userData: ", user);
    return getUserPurchasedBooksPromise(user.id);
  })
  .then((books) => {
    console.log("Promise chaining books: ", books)
  })
  .catch((err) => {
    throw new Error(err)
  });


//Async await
const getUserBooksData = async (email) => {
  const user = await getUserByEmailPromise(email);
  if (user) {
    const books = await getUserPurchasedBooksPromise(user.id);
    console.log("Asyn await - books data: ", books)
  }
}

getUserBooksData("john@gmail.com");

/**************************************************************************************************************
 *                                            Promise.all()
 * MDN LINK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * --- Takes an array of promises and returns a single promise.
 * --- This returns the promise fullfills when all of the input promises fullfills with an array of fullfilment
 *     values.
 * --- It rejects when any of the input's promises rejects, with this first rejection reason.
 * 
 * --- If the iterable contains non-promise values, they will be ignored, but still counted in the returned 
 *     promise array value (if the promise is fulfilled):
 * 
 */
Promise.all([getUserByEmailPromise('john@gmail.com'), getUserPurchasedBooksPromise(1)])
  .then((data) => {
    console.log("Promise.all() - data: ", data)
  }).catch((err) => {
    console.log(err)
  });


//Promise.all waits for all fulfillments (or the first rejection)
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});


// All values are non-promises, so the returned promise gets fulfilled
const p = Promise.all([1, 2, 3]);
// The only input promise is already fulfilled,
// so the returned promise gets fulfilled
const p4 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// One (and the only) input promise is rejected,
// so the returned promise gets rejected
const p5 = Promise.all([1, 2, 3, Promise.reject(555)]);

// Using setTimeout, we can execute code after the queue is empty
setTimeout(() => {
  console.log(p);
  console.log(p4);
  console.log(p5);
});

// Logs:
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }

