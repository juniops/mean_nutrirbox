import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'telefone.component',
  templateUrl: './telefone.html'
})
export class TelefoneComponent {
  @Input() myForm: FormGroup; // This component is passed a FormGroup from the base component template
}