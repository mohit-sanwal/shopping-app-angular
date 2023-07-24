import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shopping-app-angular';
  featureValue = 'recipe'

  onNavigate(fetureData: string) {
    console.log('displayInfo', fetureData)
    this.featureValue = fetureData;
  }

  ngOnInit() {

  }
  
}
