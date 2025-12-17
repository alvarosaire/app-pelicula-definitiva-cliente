import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PeliculaListComponent } from './Pelicula/pelicula-list/pelicula-list.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PeliculaListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppPeliculaDefinitivaCliente';
}
