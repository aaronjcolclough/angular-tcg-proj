import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRouterModule } from "./router/app-router.module";
import { AuthModule } from "./auth/auth.module";
import { CoreModule } from "./core.module";
import { HeaderComponent } from "./header/header.component";
import { RecipesModule } from "./recipe-book/recipes.module";
import { SharedModule } from "./shared/shared.module";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";

@NgModule({
  imports: [
    AppRouterModule,
    AuthModule,
    BrowserModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RecipesModule,
    SharedModule,
    ShoppingListModule
  ],
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
