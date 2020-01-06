import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: VehicleListComponent },
    ])
  ],
  declarations: [ 
    AppComponent, 
    TopBarComponent, 
    VehicleListComponent 
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
