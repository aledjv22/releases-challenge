import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './tag-list.component.html'
})
export class TagListComponent {
  readonly tags: string[] = [
    'Corrección de Errores',
    'Actualización de Funcionalidades',
    'Parche de Seguridad',
    'Nueva Funcionalidad',
    'Lanzamiento Mayor',
    'Lanzamiento Menor',
    'Lanzamiento Estable',
    'Parche Urgente'
  ]
}
