import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { RecipeBookComponent } from "./recipe-book.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeHomeComponent } from "./recipe-home/recipe-home.component";
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipesRouterModule } from "../router/recipes-router.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    ReactiveFormsModule,
    RecipesRouterModule,
    RouterModule,
    SharedModule
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
