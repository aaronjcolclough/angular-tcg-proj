import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { RecipeBookComponent } from "./recipe-book.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeHomeComponent } from "./recipe-home/recipe-home.component";
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipesRouterModule } from "../router/recipes-router.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRouterModule,
    RouterModule
  ],
  declarations: [
    RecipeBookComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeHomeComponent,
    RecipeItemComponent,
    RecipeListComponent
  ]
})
export class RecipesModule {}
