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
  ingredientSelected = new Subject<Ingredient>();

  constructor() {}

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

  onDeleteIngredient(ingredient: Ingredient) {
    let index = this.ingredients.indexOf(ingredient);
    if (this.ingredients[index].amount - ingredient.amount > 0) {
      this.ingredients[index].amount =
        this.ingredients[index].amount - ingredient.amount;
    } else {
      this.ingredients = this.ingredients.filter(
        i => ingredient.name !== i.name
      );
      this.ingredientsChanged.next(this.ingredients.slice());
    }
  }
}
