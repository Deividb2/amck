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
      name: "Danielle Alves",
      text: "Estou encantada com o trabalho realizado! Os armários da minha clínica ficaram lindos, com acabamento impecável e cada detalhe muito bem pensado. Além da qualidade, o atendimento foi excelente e o prazo cumprido direitinho. Recomendo de olhos fechados!",
      profile: "images/clients-profile/danielle-alves.jpg"
    },
    {
      name: "Flávia Cruz",
      text: "Só tenho elogios ao ótimo serviço prestado pelo Alessandro. Encomendei um guarda roupa e um painel, simplesmente ficaram perfeitos, o material é de ótima qualidade e a dedicação dele não tem comparação. Sem falar que ele ainda montou meu armário de cozinha rsrs, amei o atendimento e o recomendo a todos.",
      profile: "images/clients-profile/flavia-cruz.png"
    }
  ]

}
