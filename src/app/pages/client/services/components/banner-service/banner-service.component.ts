import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-service',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './banner-service.component.html',
  styleUrl: './banner-service.component.scss'
})
export class BannerServiceComponent {

  environments: ReadonlyArray<{pathImg: string, alt: string}> = [
    {
      pathImg: "images/moveis/img28.jpeg",
      alt: "Imagem de armário"
    },
    {
      pathImg: "images/moveis/img46.jpeg",
      alt: "Imagem de armário"
    },
    {
      pathImg: "images/moveis/img42.jpeg",
      alt: "Imagem de armário"
    },
    {
      pathImg: "images/moveis/img9.jpeg",
      alt: "Imagem de armário"
    }
  ]

}
