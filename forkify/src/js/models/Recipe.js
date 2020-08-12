import axios from 'axios';
import { key, proxy } from '../config';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.image = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
        } catch (error) {
            alert('Something went wrong');
        }
    }

    calcTime() {
        //Assuming that we need 15 min for each 3 ingradeients
        const numIng = this.ingredients.length;
        const preiods = Math.ceil(numIng / 3);
        this.time = preiods * 15;
    }

    calcServings() {
        this.servings = 4;
    }

    parseIngredients() {
        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
        const unitShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
        const units = [...unitShort, 'kg', 'g'];

        const newIngredients = this.ingredients.map(element => {
            // 1. Uniform units
            let ingredient = element.toLowerCase();
            unitsLong.forEach((unit, i) => {
                ingredient = ingredient.replace(unit, unitShort[i]);
            });

            //2.Remove parentherse
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

            //3. Parse ingredients into count, unit and ingredients
            const arrIng = ingredient.split(' ');
            const unitIndex = arrIng.findIndex(el => units.includes(el));

            let objIng;
            if (unitIndex > -1) {
                //There is a unit
                // ex. 4 1/2 cups, arrCount is [4, 1/2]
                // ex. 4 cups , arrCount is [4]
                const arrCount = arrIng.slice(0, unitIndex);
                let count;
                if (arrCount.length === 1) {
                    count = eval(arrIng[0].replace('-', '+'));
                } else {
                    count = eval(arrIng.slice(0, unitIndex).join('+'));
                }

                objIng = {
                    count,
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.splice(unitIndex + 1).join(' ')
                };
            } else if (parseInt(arrIng[0], 10)) {
                //There is no unit but Ist element is number
                objIng = {
                    count: parseInt(arrIng[0], 10),
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ')
                };

            } else if (unitIndex === -1) {
                //There is no unit and no number in Ist position
                objIng = {
                    count: 1,
                    unti: '',
                    ingredient: ingredient
                };
            }
            return objIng;
        });
        this.ingredients = newIngredients;
    }

    updateServings(type) {
        // Servings
        const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1;

        // Ingrediants
        this.ingredients.forEach(ing => {
            // ing.count = int.count * (newServings / this.servings);
            ing.count *= (newServings / this.servings);
        });

        this.servings = newServings;
    }
}