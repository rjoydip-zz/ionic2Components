import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterMenuComponent } from './filter-menu';
// Services and Providers
import { FilterDataService } from './filter-data.services';

@NgModule({
  declarations: [
    FilterMenuComponent,
  ],
  imports: [
    IonicPageModule.forChild(FilterMenuComponent),
  ],
  exports: [
    FilterMenuComponent
  ], 
  providers: [
    FilterDataService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class FilterMenuComponentModule { }
