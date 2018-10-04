import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicPage } from './music';
import { ComponentsModule } from '../../../components/components.module'; 

@NgModule({
  declarations: [
    MusicPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(MusicPage),
  ],
})
export class MusicPageModule {}
