import {Component}from '@angular/core';
import {Ingredients} from './ingredients.model'
@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent {
    ingredients: Ingredients[] = [
        new Ingredients('apple', 20),
        new Ingredients('tomatoes', 20)
    ];

   constructor() {

   }
}