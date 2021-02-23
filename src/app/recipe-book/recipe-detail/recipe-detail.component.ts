import { Component, Input, OnInit } from "@angular/core";
import { RecipeService } from "../../services/recipe.service";

import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService) {
    // this.recipeService.recipeSelected.subscribe(
    //   selectedRecipe => (this.recipe = selectedRecipe)
    // );
  }

  ngOnInit() {
    // this.recipe = this.recipeService.selectedRecipe;
  }
}
