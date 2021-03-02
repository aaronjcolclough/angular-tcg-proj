import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shopping-list/ingredient.model";

@Injectable()
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ];
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredientSelected = new Subject<number>();

  constructor() {}

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  onAddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  onAddIngredients(ingreds: Ingredient[]) {
    this.ingredients.push(...ingreds);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  onUpdateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  onDeleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
