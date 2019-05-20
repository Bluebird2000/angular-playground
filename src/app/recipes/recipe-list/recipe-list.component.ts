import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes : Recipe[] = [
    new Recipe('A delecious Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/10/13/05/06/egg-wrapped-fried-rice-1736801__340.jpg'),
    new Recipe('Another Recipe', 'This is simply another recipe', 'https://cdn.pixabay.com/photo/2015/08/26/10/58/the-pork-fried-rice-made-908333__340.jpg'),
    new Recipe('yummy Recipe', 'This is simply yummy recipe', 'https://cdn.pixabay.com/photo/2017/07/16/11/57/fried-2509089_960_720.jpg'),
    new Recipe('elegant recipe', 'This is simply yummy recipe', 'https://cdn.pixabay.com/photo/2016/10/23/09/37/restaurant-1762493__340.jpg'),
  ]
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
  constructor() { }

  ngOnInit() {
  }

}