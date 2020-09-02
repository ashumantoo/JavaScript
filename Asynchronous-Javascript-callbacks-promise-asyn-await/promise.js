const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([234, 567, 896, 486]);
  }, 1500);
});

const getRecipe = recId => {
  return new Promise((resolve, reject) => {
    setTimeout((ID) => {
      const recipe = { title: 'Fresh tomato pasta', publisher: 'Jonas' };
      resolve(`${ID} : ${recipe.title}`);
    }, 1500, recId);
  });
};

const getRelated = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout((pub) => {
      const recipe = { title: 'Italian Pizza', publisher: 'Jonas' };
      resolve(`${pub} : ${recipe.title}`);
    }, 1500, publisher);
  });
};

getIDs.then(IDs => {
  console.log(IDs);
  return getRecipe(IDs[2]);
}).then(recipe => {
  console.log(recipe);
  return getRelated('Jonas');
}).then((recipe) => {
  console.log(recipe);
}).catch(error => {
  console.log(error);
});


//====================================== Example 2============================

const getPost = (pid) => {
  return new Promise((resolve, reject) => {
    if (!pid) {
      reject('Post id not found');
    } else {
      setTimeout(() => {
        resolve({
          id: 1,
          title: "First Post",
          body: "Test Post",
          author: "author1231",
        });
      }, 1500);
    }
  })
};

const getAuthor = (authorId) => {
  return new Promise((resolve, reject) => {
    if (!authorId) {
      reject('Not a valid author Id');
    } else {
      setTimeout(() => {
        resolve({
          id: "1",
          name: "Ashutosh Mantoo",
          email: 'ashutosh@mail.com',
          age: 27
        });
      }, 1000)
    }
  });
};


// const post = getPost('1');  //will gives a promise
// console.log(post);
getPost('1').then((post) => {
  console.log(post);
  getAuthor(post.author).then((author) => {
    console.log(author);
  }).catch(error => {
    console.log(error);
  });
}).catch((error) => {
  console.log(error);
});


//================================
const yt = new Promise((resolv, reject) => {
  setTimeout(() => {
    console.log('getting stuff from youtube');
    resolve({ videos: [1, 2, 3, 4, 5, 6] })
  }, 2000);
});


const fb = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('stuff from fb');
    resolve({ username: "ashumantoo" });
  }, 3000);
});

//Promise all 
Promise.all(yt, fb).then(result => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});