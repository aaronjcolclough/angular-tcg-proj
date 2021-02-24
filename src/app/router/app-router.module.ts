import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipeBookComponent } from "../recipe-book/recipe-book.component";
import { RecipeDetailComponent } from "../recipe-book/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "../recipe-book/recipe-edit/recipe-edit.component";
import { RecipeHomeComponent } from "../recipe-book/recipe-home/recipe-home.component";
import { ShoppingListComponent } from "../shopping-list/shopping-list.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipe-book", pathMatch: "full" },
  {
    path: "recipe-book",
    component: RecipeBookComponent,
    children: [
      { path: "", component: RecipeHomeComponent },
      { path: "new", component: RecipeEditComponent },
      { path: ":id", component: RecipeDetailComponent },
      { path: ":id/edit", component: RecipeEditComponent }
    ]
  },
  { path: "shopping-list", component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouterModule {}
