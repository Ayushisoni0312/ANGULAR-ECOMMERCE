import { Component, OnInit } from '@angular/core';
import * as jsonData from '../../../assets/vendor.json';


@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
  jsonData : any = jsonData.vendor;

  constructor() { }

  ngOnInit(): void {
    console.log(this.jsonData)
  }

}
