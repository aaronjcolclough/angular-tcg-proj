import { Component, Input, OnInit } from "@angular/core";
import { RecipeService } from "../services/recipe.service";

import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipe-book",
  templateUrl: "./recipe-book.component.html",
  styleUrls: ["./recipe-book.component.css"],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {
  recipeSelected: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => (this.recipeSelected = recipe)
    );
  }

  toggleDetails() {}
}
