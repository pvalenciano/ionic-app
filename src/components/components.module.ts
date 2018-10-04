import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { TopNavbarComponent } from './top-navbar/top-navbar';
////////////////////////////////////////////////////////////
/*you must import the component module into the module page
 where you want to see the component */
////////////////////////////////////////////////////////////

@NgModule({
	declarations: [
		
		TopNavbarComponent
	],
	imports: [IonicModule, CommonModule],
	exports: [
		TopNavbarComponent
	]
})
export class ComponentsModule { }
