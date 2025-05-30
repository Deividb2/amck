import { CommonModule, IMAGE_CONFIG, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  imagesProjects: ReadonlyArray<{ path: string, alt: string }> = [
    {
      path: 'images/moveis/img36.jpeg',
      alt: 'Imagem de armário'
    },
    {
      path: 'images/moveis/img21.jpeg',
      alt: 'Imagem de armário'
    },
    {
      path: 'images/moveis/img46.jpeg',
      alt: 'Imagem de armário'
    },
    {
      path: 'images/moveis/img43.jpeg',
      alt: 'Imagem de armário'
    },
    {
      path: 'images/moveis/img9.jpeg',
      alt: 'Imagem de armário'
    }
  ]
}