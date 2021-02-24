import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shopping-list/ingredient.model";

@Injectable()
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ];
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  onAddIngredient(ingredient: Ingredient) {
    // if (this.ingredients.includes(ingredient)) {
    //   console.log("includes");
    //   const sortIngred = this.ingredients.find(
    //     ingred => ingred.name === ingredient.name
    //   );
    //   this.ingredients[this.ingredients.indexOf(sortIngred)].amount =
    //     sortIngred.amount + ingredient.amount;
    // } else {
    //   console.log("excludes");
    this.ingredients.push(ingredient);
    // }

    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  onAddIngredients(ingreds: Ingredient[]) {
    // ingreds.forEach(ingredient => this.onAddIngredient(ingredient));
    this.ingredients.push(...ingreds);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
