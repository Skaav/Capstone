import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrenotazioneComponent } from './prenotazione.component';

const routes: Routes = [{ path: '', component: PrenotazioneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrenotazioneRoutingModule { }
