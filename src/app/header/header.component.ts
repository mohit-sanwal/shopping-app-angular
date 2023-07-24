import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isRecipe: boolean = false;
  isShoppingList: boolean = false;
  @Output() featureSelected = new EventEmitter<string>();
  
  constructor() {
    
  }
  ngOnInit(): void {
    
  }
  
  onSelect(feature: string) {
     this.isRecipe = true;
     this.isShoppingList =false;
     this.featureSelected.emit(feature)
     console.log('onRecipesClick', this.featureSelected)
  }

}
