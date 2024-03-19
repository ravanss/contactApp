import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.scss'
})
export class ContatosComponent {
  faplus = faPlus;
  faBars = faBars;
}
