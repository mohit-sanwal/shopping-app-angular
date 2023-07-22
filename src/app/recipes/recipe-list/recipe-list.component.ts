import { Component } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipe: Recipe[] = [
    new Recipe('test recipe', 'this is simply a test recipe', 'https://picturetherecipe.com/wp-content/uploads/2020/04/Vanilla-Cardamom-Kulfi-PTR-Featured-395x500.jpg')
  ];

  constructor() {
    
  }

  ngOnInit() {

  }
}
