import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoPcRoutingModule } from './info-pc-routing.module';
import { InfoPcComponent } from './info-pc.component';


@NgModule({
  declarations: [
    InfoPcComponent
  ],
  imports: [
    CommonModule,
    InfoPcRoutingModule
  ]
})
export class InfoPcModule { }
