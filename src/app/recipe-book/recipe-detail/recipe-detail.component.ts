import { Component, Input, OnInit } from "@angular/core";
import { RecipeService } from "../../services/recipe.service";
import { ShoppingListService } from "../../services/shopping-list.service";
import { Ingredient } from "../../shopping-list/ingredient.model";

import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  onAdd() {
    this.recipeService.onAddIngredients(this.recipe.ingredients);
  }
}
