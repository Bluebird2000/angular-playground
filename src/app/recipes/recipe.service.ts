import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes : Recipe[] = [
        new Recipe('A delecious Recipe', 'first recipe ever created', 'https://cdn.pixabay.com/photo/2016/10/13/05/06/egg-wrapped-fried-rice-1736801__340.jpg'),
        new Recipe('xttreme Recipe', 'xttreme recipe delight', 'https://cdn.pixabay.com/photo/2015/08/26/10/58/the-pork-fried-rice-made-908333__340.jpg'),
        new Recipe('yummy Recipe', 'wanna eat delecious recipe', 'https://cdn.pixabay.com/photo/2017/07/16/11/57/fried-2509089_960_720.jpg'),
        new Recipe('elegant recipe', 'Jabbok valley recipe', 'https://cdn.pixabay.com/photo/2014/10/29/22/49/fried-rice-508721__340.jpg'),
        new Recipe('delight recipe', 'Deligthful affairs bakery', 'https://cdn.pixabay.com/photo/2016/07/28/19/55/food-1549292__340.jpg'),
        new Recipe('jendor recipe', 'New Jendor recipe', 'https://cdn.pixabay.com/photo/2015/11/17/15/31/japanese-1047736__340.jpg'),
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}