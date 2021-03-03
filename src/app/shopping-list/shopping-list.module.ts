import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingListEditComponent } from "./shopping-list-edit/shopping-list-edit.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild([
      { path: "", component: ShoppingListComponent }
    ]),
    SharedModule
  ],
  declarations: [ShoppingListComponent, ShoppingListEditComponent]
})
export class ShoppingListModule {}
