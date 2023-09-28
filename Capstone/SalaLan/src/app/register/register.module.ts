import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    FormsModule,
    NgbModule,
    RouterModule,
    CommonModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
