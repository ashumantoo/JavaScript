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

async function getRecipesAW() {
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const related = await getRelated('Jonas');
    console.log(related);

    return recipe;
}

/**
 * Here the calling function getRecipeAW will return a promise so when I trying to asign this promise to a variable to log on to the console.
 * But this is a asyn function which run in background and wait for the promise to return while the javascript compile move to the next line
 * to print the value to the console but in this case function is trying to the resolve the promise thats why its just showing pending.
 */
const rec = getRecipesAW();
console.log(rec);

//so we could resolve this problem like this
getRecipesAW().then(result => console.log(`${result} is the best ever`));