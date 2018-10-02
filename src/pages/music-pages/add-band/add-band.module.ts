import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBandPage } from './add-band';

@NgModule({
  declarations: [
    AddBandPage,
  ],
  imports: [
    IonicPageModule.forChild(AddBandPage),
  ],
})
export class AddBandPageModule {}
