import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-service',
  standalone: true,
  imports: [],
  templateUrl: './banner-service.component.html',
  styleUrl: './banner-service.component.scss'
})
export class BannerServiceComponent {

  environments: ReadonlyArray<{title: string, pathImg: string}> = [
    {
      title: "Sala",
      pathImg: "images/pexels/img1.jpg"
    },
    {
      title: "Quarto",
      pathImg: "images/moveis/img46.jpeg"
    },
    {
      title: "Cozinha",
      pathImg: "images/pexels/img5.jpg"
    },
    {
      title: "Banheiro",
      pathImg: "images/pexels/img2.jpg"
    }
  ]

}
