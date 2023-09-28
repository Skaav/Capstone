import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { Router, RouterModule } from '@angular/router';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterRoutingModule } from '../register/register-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    NgbCarouselModule,
    NgbModule,
    RouterModule,
    CommonModule,
    HomeRoutingModule,
    RegisterRoutingModule
  ]
})
export class HomeModule { }
