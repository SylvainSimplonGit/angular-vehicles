import { Component } from '@angular/core';

import { vehicles } from '../vehicles';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent {
  vehicles = vehicles;
  
  constructor() { }

  ngOnInit() {
  }

}