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

getRecipe();