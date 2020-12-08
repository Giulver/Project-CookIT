import moment from 'moment';

class Recipe {    
    constructor(name, cover, difficulty, portions, time_prep, diet, meal, favourite, last_timestamp, introduction, ingredients, preparation) {
        this.name = name;
        this.cover = cover;
        this.difficulty = difficulty;
        this.portions = portions;
        this.time_prep = time_prep;
        this.diet = diet;
        this.meal = meal;
        this.favourite = favourite;
        this.last_timestamp = moment(last_timestamp, 'YYYY-MM-DD hh:mm:ss');
        this.introduction = introduction;
        this.ingredients = ingredients;
        this.preparation = preparation;
    }
}
  
export default Recipe;