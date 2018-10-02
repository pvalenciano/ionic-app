import { Component } from '@angular/core';

/**
 * Generated class for the CardNoteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-note',
  templateUrl: 'card-note.html'
})
export class CardNoteComponent {

  text: string;

  constructor() {
    console.log('Hello CardNoteComponent Component');
    this.text = 'Hello World';
  }

}
