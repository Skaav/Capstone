import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoSaleComponent } from './info-sale.component';

const routes: Routes = [{ path: '', component: InfoSaleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoSaleRoutingModule { }
