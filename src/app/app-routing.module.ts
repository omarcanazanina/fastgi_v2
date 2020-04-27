import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },  {
    path: 'pin',
    loadChildren: () => import('./confirmation/pin/pin.module').then( m => m.PinPageModule)
  },
  {
    path: 'amount',
    loadChildren: () => import('./confirmation/amount/amount.module').then( m => m.AmountPageModule)
  },
  {
    path: 'send-money',
    loadChildren: () => import('./send_charge/send-money/send-money.module').then( m => m.SendMoneyPageModule)
  },
  {
    path: 'charge-money',
    loadChildren: () => import('./send_charge/charge-money/charge-money.module').then( m => m.ChargeMoneyPageModule)
  },
  {
    path: 'load-money',
    loadChildren: () => import('./saldo/load-money/load-money.module').then( m => m.LoadMoneyPageModule)
  },
  {
    path: 'remove-money',
    loadChildren: () => import('./saldo/remove-money/remove-money.module').then( m => m.RemoveMoneyPageModule)
  },
  {
    path: 'form-card',
    loadChildren: () => import('./forms/form-card/form-card.module').then( m => m.FormCardPageModule)
  },
  {
    path: 'single-contact',
    loadChildren: () => import('./single-contact/single-contact.module').then( m => m.SingleContactPageModule)
  },
  {
    path: 'form-name',
    loadChildren: () => import('./forms/form-name/form-name.module').then( m => m.FormNamePageModule)
  },
  {
    path: 'form-phone',
    loadChildren: () => import('./forms/form-phone/form-phone.module').then( m => m.FormPhonePageModule)
  },
  {
    path: 'form-mail',
    loadChildren: () => import('./forms/form-mail/form-mail.module').then( m => m.FormMailPageModule)
  },
  {
    path: 'form-pin',
    loadChildren: () => import('./forms/form-pin/form-pin.module').then( m => m.FormPinPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
