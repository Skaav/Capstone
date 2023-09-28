import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrenotazioneRoutingModule } from './prenotazione-routing.module';
import { PrenotazioneComponent } from './prenotazione.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PrenotazioneComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    CommonModule,
    PrenotazioneRoutingModule
  ]
})
export class PrenotazioneModule { }
