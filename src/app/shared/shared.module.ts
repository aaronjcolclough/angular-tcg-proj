import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";

@NgModule({
  imports: [CommonModule],
  declarations: [AlertComponent, DropdownDirective, LoadingSpinnerComponent],
  exports: [
    AlertComponent,
    CommonModule,
    DropdownDirective,
    LoadingSpinnerComponent
  ]
})
export class SharedModule {}
