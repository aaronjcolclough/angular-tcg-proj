import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRouterModule } from "./router/app-router.module";
import { AuthComponent } from "./auth/auth.component";
import { AuthInterceptorService } from "./services/auth-interceptor.service";
import { HeaderComponent } from "./header/header.component";
import { RecipesModule } from "./recipe-book/recipes.module";
import { RecipeService } from "./services/recipe.service";
import { SharedModule } from "./shared/shared.module";
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
    SharedModule,
    ShoppingListModule
  ],
  declarations: [AppComponent, AuthComponent, HeaderComponent],
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
