function getRecipe() {
  setTimeout(() => {
    const recipeId = [523, 883, 432, 974];
    console.log(recipeId);
    setTimeout(id => {
      const receipe = { title: 'Fresh tomato pasta', publisher: 'Jonas' };
      console.log(`${id} : ${receipe.title}`);
      setTimeout((publisher) => {
        const receipe2 = { title: 'Italian Pizza', publisher: 'Jonas' };
        console.log(receipe);
      }, 1500, receipe.publisher);
    }, 1500, recipeId[2]);
  }, 1500);
}

// getRecipe();



//=============================== 2nd Example ===================================
console.log("start");

/*
const getUser = (email, password) => {
  setTimeout(() => {
    console.log('now we have data');
    return { email, password }
  }, 2000);
}

const user = getUser('ashu@me.com', 12234);
console.log(user); // this line of code will execute before finishing the getUser(), which will be undefined 

*/


const getUser = (email, password, callback) => {
  setTimeout(() => {
    console.log('now we have data');
    callback({ email, password });
  }, 2000);
};

const getUserVideos = (email, callback) => {
  if (!email) {
    callback('Email not found');
  } else {
    setTimeout(() => {
      callback(['video1', 'video2', 'video3', 'video4']);
    }, 1500);
  }
};

const getVideoDetails = (videoId, callback) => {
  if (videoId) {
    setTimeout(() => {
      callback(`This is a sample video`);
    }, 1000)
  } else {
    callback("Video Id not found");
  }
};

getUser('ashu@me.com', 12234, (user) => {
  console.log(user);
  getUserVideos(user.email, (videos) => {
    console.log(videos);
    getVideoDetails('1', (video) => {
      console.log(video);
    })
  });
});

console.log('finish');