import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './tag-list.component.html'
})
export class TagListComponent {
  readonly tags: { title: string; color: string; }[] = [
    { title: 'Corrección de Errores', color: '#ff5733'},
    { title: 'Actualización de Funcionalidades', color: '#ffd700'},
    { title: 'Parche de Seguridad', color: '#00ff00'},
    { title: 'Nueva Funcionalidad', color: '#FFA500'},
    { title: 'Lanzamiento Mayor', color: '#ff0000'},
    { title: ' Lanzamiento Menor', color: '#0000ff'},
    { title: 'Lanzamiento Estable', color: '#800080'},
    { title: 'Parche Urgente', color : '#ff5733'}
  ]
}
