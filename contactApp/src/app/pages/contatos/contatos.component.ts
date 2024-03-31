import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';

type InputTypes = "text";

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.scss'
})
export class ContatosComponent {
  faplus = faPlus;
  faBars = faBars;

  loginForm!: FormGroup;

  @Input() type: InputTypes = "text";
  @Output("submit") onSubmit = new EventEmitter;

  constructor(){
    this.loginForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      //numero: new FormControl('', [Validators.required, Validators.minLength(3)])//
    })
  }

}
