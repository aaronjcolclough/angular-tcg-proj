import { ActivatedRoute, Params } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { Recipe } from "../recipe.model";
import { RecipeService } from "../../services/recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAdd() {
    this.recipeService.onAddToShopping(this.recipe.ingredients);
  }

  onDelete() {
    this.recipeService.onDeleteRecipe(this.id);
  }
}
