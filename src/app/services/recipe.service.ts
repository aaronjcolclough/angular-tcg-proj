import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shopping-list/ingredient.model";
import { Recipe } from "../recipe-book/recipe.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [];

  recipesChanged = new Subject<Recipe[]>();

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  onAddRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  onUpdateRecipe(id: number, recipe: Recipe) {
    this.recipes[id] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  onDeleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  onAddToShopping(ingredients: Ingredient[]) {
    this.slService.onAddIngredients(ingredients);
  }
}
