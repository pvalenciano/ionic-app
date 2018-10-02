import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditBandPage } from './edit-band';

@NgModule({
  declarations: [
    EditBandPage,
  ],
  imports: [
    IonicPageModule.forChild(EditBandPage),
  ],
})
export class EditBandPageModule {}
