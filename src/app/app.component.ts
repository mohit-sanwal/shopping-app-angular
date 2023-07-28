import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shopping-app-angular';
  featureValue = 'recipe'

  numbers = [2, 3 ,4,5,6,7,8];

  constructor() {
    
  }

  onNavigate(fetureData: string) {
    console.log('displayInfo', fetureData)
    this.featureValue = fetureData;
  }

  ngOnInit() {

  }
  
}
