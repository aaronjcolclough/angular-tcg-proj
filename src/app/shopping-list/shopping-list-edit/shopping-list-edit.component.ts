import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

import { Ingredient } from "../ingredient.model";
import { ShoppingListService } from "../../services/shopping-list.service";

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"]
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild("f") slForm: NgForm;
  sub: Subscription;
  selectedIngredient: Ingredient;
  editMode = false;
  editIndex: number;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.sub = this.slService.ingredientSelected.subscribe((index: number) => {
      this.editMode = true;
      this.editIndex = index;
      this.selectedIngredient = this.slService.getIngredient(index);
      this.slForm.setValue({
        name: this.selectedIngredient.name,
        amount: this.selectedIngredient.amount
      });
    });
  }

  onSubmit(form: NgForm) {
    const ingredient = new Ingredient(form.value.name, form.value.amount);

    !this.editMode
      ? this.slService.onAddIngredient(ingredient)
      : this.slService.onUpdateIngredient(this.editIndex, ingredient);
    this.onClearForm();
  }
  onDelete() {
    this.slService.onDeleteIngredient(this.editIndex);
    this.onClearForm();
  }

  onClearForm() {
    this.slForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
