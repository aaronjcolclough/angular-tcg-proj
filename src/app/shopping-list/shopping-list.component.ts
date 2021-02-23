import { Component, OnInit } from "@angular/core";
import { ShoppingListService } from "../services/shopping-list.service";

import { Ingredient } from "./ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.ingredients;
  }

  onAddIngredient(ingredient: Ingredient) {
    this.shoppingListService.onAddIngredient(ingredient);
  }
}
