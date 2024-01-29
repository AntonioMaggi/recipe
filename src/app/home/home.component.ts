// HomeComponent.component.ts
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RecipeCardComponent, CommonModule, RouterOutlet]
})

export class HomeComponent {
  recipes: any[] = [];
  image: string = ''

  constructor(private recipeService: RecipeService) { }
 
//   ngOnInit(): void {
//      this.recipeService.getRecipes().subscribe((data: any[]) => {
//        this.recipes = data;
//      });
//   }
//  }

 async fetchData() {
  this.recipes = await this.recipeService.getData();
  console.log(this.recipes)
}

 ngOnInit(){
  this.fetchData();
 }


// function ngOnInit() {
//   throw new Error('Function not implemented.');
// }
// function ngOnInit() {
//   throw new Error('Function not implemented.');
// }
}