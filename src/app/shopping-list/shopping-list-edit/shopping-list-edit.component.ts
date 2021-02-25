import { Component, OnDestroy,  OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { ShoppingListService } from "../../services/shopping-list.service";
import { Ingredient } from "../ingredient.model";

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"]
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  sub: Subscription;
  selectedIngredient: Ingredient;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.sub = this.slService.ingredientSelected.subscribe(
      (ingredient: Ingredient) => (this.selectedIngredient = ingredient)
    );
  }

  onAddItem(form: NgForm) {
    this.slService.onAddIngredient(
      new Ingredient(form.value.name, form.value.amount)
    );
  }
  onDeleteItem(form: NgForm) {
    this.slService.onDeleteIngredient(
      new Ingredient(form.value.name, form.value.amount)
    );
  }

  ngOnDestroy():void{
    this.sub.unsubscribe();
  }
}
