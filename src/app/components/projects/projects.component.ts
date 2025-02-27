import { CommonModule, IMAGE_CONFIG } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  imagesProjects: ReadonlyArray<IImagesProject> = [
    {
      path: 'assets/images/moveis/img9.jpeg',
      alt: ''
    },
    {
      path: 'assets/images/moveis/img5.jpeg',
      alt: ''
    },
    {
      path: 'assets/images/moveis/img46.jpeg',
      alt: ''
    },
    {
      path: 'assets/images/moveis/img1.jpeg',
      alt: ''
    },
    {
      path: 'assets/images/moveis/img35.jpeg',
      alt: ''
    },
    {
      path: 'assets/images/moveis/img32.jpeg',
      alt: ''
    },
    {
      path: 'assets/images/moveis/img14.jpeg',
      alt: ''
    },
    {
      path: 'assets/images/moveis/img42.jpeg',
      alt: ''
    },
    {
      path: 'assets/images/moveis/img44.jpeg',
      alt: ''
    },
    {
      path: 'assets/images/moveis/img28.jpeg',
      alt: ''
    },
    {
      path: 'assets/images/moveis/img56.jpeg',
      alt: ''
    },
    {
      path: 'assets/images/moveis/img50.jpeg',
      alt: ''
    },
    {
      path: 'assets/images/moveis/img51.jpeg',
      alt: ''
    },
    {
      path: 'assets/images/moveis/img55.jpeg',
      alt: ''
    },
  ]
}

interface IImagesProject {
  path: string
  alt: string
}
