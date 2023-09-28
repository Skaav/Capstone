import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPcComponent } from './info-pc.component';

const routes: Routes = [{ path: '', component: InfoPcComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoPcRoutingModule { }
