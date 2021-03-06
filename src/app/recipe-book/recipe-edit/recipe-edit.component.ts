import { ActivatedRoute, Params, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

import { RecipeService } from "../../services/recipe.service";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"]
})
export class RecipeEditComponent implements OnInit {
  recipeId: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recipeId = +params["id"];
      this.editMode = params["id"] != null;
      this.initForm();
    });
  }

  onSubmit() {
    this.editMode
      ? this.recipeService.onUpdateRecipe(this.recipeId, this.recipeForm.value)
      : this.recipeService.onAddRecipe(this.recipeForm.value);

    this.router.navigate(["../"], { relativeTo: this.route });
  }

  onNewIngredient() {
    (<FormArray>this.recipeForm.get("ingredients")).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteIngredient(id: number) {
    (<FormArray>this.recipeForm.get("ingredients")).removeAt(id);
  }

  get controls() {
    return (<FormArray>this.recipeForm.get("ingredients")).controls;
  }

  private initForm() {
    let recipeName = "";
    let recipeIMG = "";
    let recipeDesc = "";
    let recipeIngreds = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.recipeId);

      recipeName = recipe.name;
      recipeIMG = recipe.imagePath;
      recipeDesc = recipe.description;
      if (recipe["ingredients"]) {
        for (let i of recipe.ingredients) {
          recipeIngreds.push(
            new FormGroup({
              name: new FormControl(i.name, Validators.required),
              amount: new FormControl(i.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeIMG, Validators.required),
      description: new FormControl(recipeDesc, Validators.required),
      ingredients: recipeIngreds
    });
  }
}
