import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AlertComponent } from "./shared/alert/alert.component";
import { AppComponent } from "./app.component";
import { AppRouterModule } from "./router/app-router.module";
import { AuthComponent } from "./auth/auth.component";
import { AuthInterceptorService } from "./services/auth-interceptor.service";
import { DropdownDirective } from "./dropdown.directive";
import { HeaderComponent } from "./header/header.component";
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner.component";
import { RecipesModule } from "./recipe-book/recipes.module";
import { RecipeService } from "./services/recipe.service";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { ShoppingListService } from "./services/shopping-list.service";

@NgModule({
  imports: [
    AppRouterModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RecipesModule,
    ShoppingListModule
  ],
  declarations: [
    AlertComponent,
    AppComponent,
    AuthComponent,
    DropdownDirective,
    HeaderComponent,
    LoadingSpinnerComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    RecipeService,
    ShoppingListService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class AppModule {}
