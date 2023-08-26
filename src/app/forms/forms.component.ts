import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  public listaComida: Array<{ comida: string }> = [
    { comida: 'X Salada' },
    { comida: 'X Bacon' },
    { comida: 'Coxinha' }
  ]

  public submitForm(form: NgForm) {
    console.log(form.value)
  }
}
