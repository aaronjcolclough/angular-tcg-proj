import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Recipe } from "../recipe-book/recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable({ providedIn: "root" })
export class DataStorageService {
  // sub: Subscription;

  constructor(
    private http: HttpClient,
    private recipesService: RecipeService
  ) {}

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http
      .put(
        "https://angular-tcg-250b4-default-rtdb.firebaseio.com/recipes.json",
        recipes
      )
      .subscribe(resp => console.log(resp));
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        "https://angular-tcg-250b4-default-rtdb.firebaseio.com/recipes.json"
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => this.recipesService.setRecipes(recipes))
      )
  }
}
