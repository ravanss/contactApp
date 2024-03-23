import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';

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

  constructor(){
    this.loginForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }
}
