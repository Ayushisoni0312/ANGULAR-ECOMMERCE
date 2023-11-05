import { Component, OnInit } from '@angular/core';
import * as jsonData from '../../../assets/food.json';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  jsonData : any = jsonData.food;
  constructor() { }

  ngOnInit(): void {
    console.log(this.jsonData)
  }


}
