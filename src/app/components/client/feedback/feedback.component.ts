import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matStar } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ matStar })],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

  comments: ReadonlyArray<{name: string, text: string, profile: string}> = [
    {
      name: "Bruno Barros",
      text : "Precisava de um serviço de marcenaria em minha casa e me recomendaram o Alessandro. Eram armários antigos e precisavam de uma reforma interna e ele realizou um trabalho meticuloso e de qualidade. Os armários ficaram repaginados e muito bem feitos e bonitos!",
      profile: "images/clients-profile/bruno-barros.png"
    },
    {
      name: "Roberto Filho",
      text: "Alessandro é um profissional de confiança, dedicado e habilidoso, sempre entregando serviços de alta qualidade. Além disso, ele tem um preço justo e é extremamente pontual, sempre cumprindo os prazos estabelecidos.",
      profile: "images/clients-profile/profile2.jpg"
    },
    {
      name: "Flávia Cruz",
      text: "Gostaria de expressar minha satisfação com o excelente trabalho realizado! A qualidade do acabamento, a atenção aos detalhes e o capricho superaram minhas expectativas. Além disso, seu profissionalismo fez toda a diferença.",
      profile: "images/clients-profile/profile2.jpg"
    }
  ]

}
