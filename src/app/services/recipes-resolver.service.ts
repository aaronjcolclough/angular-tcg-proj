import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";
import { Injectable } from "@angular/core";

import { DataStorageService } from "./data-storage.service";
import { Recipe } from "../recipe-book/recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable({ providedIn: "root" })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private dsService: DataStorageService,
    private recipeService: RecipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();

    return recipes.length === 0 ? this.dsService.fetchRecipes() : recipes;
  }
}
