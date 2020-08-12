import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import { elements, renderLoader, clearLoader } from './views/base';

/** Global State of the app
 * - Search Object
 * - Current Recipe Object
 * - Shopping list
 * - Liked receipes
 */

const state = {};

/**
 * SEARCH CONTROLLER
 */
const controlSearch = async () => {
    // 1. Get query from view
    const query = searchView.getInput();
    // console.log(query);

    if (query) {
        // 2 New search object and add to the state
        state.search = new Search(query);

        // 3.Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            // 4.Search for recipes
            await state.search.getResults();

            // 5. Render results on ui
            // console.log(state.search.result);
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (error) {
            console.log(error);

            // alert('something went wrong with the search...');
            clearLoader();
        }
    }
};

elements.searchForm.addEventListener('submit', event => {
    event.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', event => {
    const btn = event.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
        // console.log(goToPage);
    }
});


/**
 * RECIPE CONTROLLER
 */

//  const r = new Recipe(47746);
//  r.getRecipe();
//  console.log(r);
const controlRecipe = async () => {
    //Get ID from url
    const id = window.location.hash.replace('#', '');
    console.log(id);

    if (id) {
        // Prepate UI for change
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // Create new recipe object
        state.recipe = new Recipe(id);

        try {
            // Get recipe data and parse ingrediants
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            // Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            // Render Recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe);
        } catch (error) {
            console.log(error);
            alert('Error processing recipe');
        }
    }

};

// window.addEventListener('hashchange',controlRecipe);
// window.addEventListener('load',controlRecipe);
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

//Handling recipe button clicks
elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease, .btn-decrease *')) {
        //Decrease button is clicked
        if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngrediants(state.recipe);
        }
    } else if (e.target.matches('.btn-increase, .btn-increase *')) {
        //Increase button is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngrediants(state.recipe);
    }
    console.log(state.recipe);
});

window.l = new List();
