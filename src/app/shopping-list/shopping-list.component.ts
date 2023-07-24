import {Component, AfterViewChecked}from '@angular/core';
import {Ingredients} from './ingredients.model'
@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements AfterViewChecked {
    ingredients: Ingredients[] = [
        new Ingredients('apple', 20),
        new Ingredients('tomatoes', 20)
    ];

   constructor() {

   }

   gradientAction(data: {nameInput: string, amountInput: any, action: string}) {
    
     switch(data.action) {
        case 'add': 
        if (data.nameInput && data.amountInput) {
          this.ingredients.push({name: data.nameInput, amount: data.amountInput});
        }
        break;
        case 'delete':
            let num: number = parseInt(data.amountInput);
            let index = this.ingredients.findIndex((item) => (item.amount === num && item.name == data.nameInput));
            if(index !== -1) {
             this.ingredients.splice(index, 1)
            }
            break;
        default:
        this.ingredients = this.ingredients;
     }
   }

   ngAfterViewChecked(): void {
    //    this.ingredients = this.ingredients
   }
}