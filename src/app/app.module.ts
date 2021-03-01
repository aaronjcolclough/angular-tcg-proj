import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { RecipeBookComponent } from "./recipe-book/recipe-book.component";
import { RecipeDetailComponent } from "./recipe-book/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-book/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-book/recipe-list/recipe-list.component";
import { RecipeEditComponent } from "./recipe-book/recipe-edit/recipe-edit.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingListEditComponent } from "./shopping-list/shopping-list-edit/shopping-list-edit.component";
import { HeaderComponent } from "./header/header.component";
import { DropdownDirective } from "./dropdown.directive";
import { ShoppingListService } from "./services/shopping-list.service";
import { AppRouterModule } from "./router/app-router.module";
import { RecipeHomeComponent } from "./recipe-book/recipe-home/recipe-home.component";
import { RecipeService } from "./services/recipe.service";
import { DataStorageService } from "./services/data-storage.service";
import { HttpClientModule } from "@angular/common/http";
import { RecipesResolverService } from "./services/recipes-resolver.service";
import { AuthComponent } from "./auth/auth.component";
import { AuthService } from "./services/auth.service";
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    RecipeBookComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    HeaderComponent,
    DropdownDirective,
    RecipeEditComponent,
    RecipeHomeComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    RecipesResolverService,
    AuthService
  ]
})
export class AppModule {}
