import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AuthComponent } from "./auth.component";
import { SharedModule } from "../shared/shared.module";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [{ path: "auth", component: AuthComponent }];

@NgModule({
  imports: [FormsModule, RouterModule.forChild(routes), SharedModule],
  declarations: [AuthComponent]
})
export class AuthModule {}
