import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [GuardGuard] },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'info-pc', loadChildren: () => import('./info-pc/info-pc.module').then(m => m.InfoPcModule), canActivate: [GuardGuard] },
  { path: 'info-sale', loadChildren: () => import('./info-sale/info-sale.module').then(m => m.InfoSaleModule), canActivate: [GuardGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'prenotazione', loadChildren: () => import('./prenotazione/prenotazione.module').then(m => m.PrenotazioneModule) },
  { path: 'aboutus', loadChildren: () => import('./aboutus/aboutus.module').then(m => m.AboutusModule) }, // Reindirizzamento predefinito a "home"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }