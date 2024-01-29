import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {

  constructor(  private recipeService: RecipeService) { }
  @Input() Recipe: any;
  
 }
