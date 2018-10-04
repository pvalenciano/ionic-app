import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotesPage } from './notes';
import { ComponentsModule } from '../../../components/components.module'; 

@NgModule({
  declarations: [
    NotesPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(NotesPage),
  ],
})
export class NotesPageModule {}
