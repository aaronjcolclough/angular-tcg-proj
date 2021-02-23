import { Injectable } from "@angular/core";
import { Ingredient } from "../shopping-list/ingredient.model";

@Injectable()
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ];

  constructor() {}

  onAddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
