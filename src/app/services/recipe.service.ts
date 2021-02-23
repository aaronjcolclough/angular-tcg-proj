import { EventEmitter, Injectable, Output } from "@angular/core";
import { Recipe } from "../recipe-book/recipe.model";

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
      "this is a test",
      "https://www.cookingclassy.com/wp-content/uploads/2019/05/fiesta-rice-recipe-7.jpg"
    ),
    new Recipe(
      "Test Recipe2",
      "this is a test2",
      "https://www.cookingclassy.com/wp-content/uploads/2019/05/fiesta-rice-recipe-7.jpg"
    )
  ];

  // selectedRecipe: Recipe;
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {}

  onRecipeSelect(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
    // this.selectedRecipe = recipe;
  }
}
