// HomeComponent.component.ts
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RecipeCardComponent]
})

export class HomeComponent implements OnInit {
  recipes: any[] = [];
 
  constructor(private recipeService: RecipeService) { }
 
  ngOnInit(): void {
     this.recipeService.getRecipes().subscribe((data: any[]) => {
       this.recipes = data;
     });
  }
 }

 