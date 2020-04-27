import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPinPageRoutingModule } from './form-pin-routing.module';

import { FormPinPage } from './form-pin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPinPageRoutingModule
  ],
  declarations: [FormPinPage]
})
export class FormPinPageModule {}
