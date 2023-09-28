import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoSaleRoutingModule } from './info-sale-routing.module';
import { InfoSaleComponent } from './info-sale.component';


@NgModule({
  declarations: [
    InfoSaleComponent
  ],
  imports: [
    CommonModule,
    InfoSaleRoutingModule
  ]
})
export class InfoSaleModule { }
