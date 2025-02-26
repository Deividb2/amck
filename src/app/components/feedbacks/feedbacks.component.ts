import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matStar } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ matStar })],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.scss'
})
export class FeedbacksComponent {
  protected feedbacks: ReadonlyArray<IFeedbacks> = [
    {
      comment: 'Tenho o prazer de recomendar o Alessandro, um excelente marceneiro com quem trabalho há mais de seis anos. Durante esse período, indiquei o trabalho dele a várias pessoas e todas ficaram extremamente satisfeitas.'
    },
    {
      comment: 'Alessandro é um profissional de confiança, dedicado e habilidoso, sempre entregando serviços de alta qualidade. Além disso, ele tem um preço justo e é extremamente pontual, sempre cumprindo os prazos estabelecidos.'
    },
    {
      comment: 'Gostaria de expressar minha satisfação com o excelente trabalho realizado! A qualidade do acabamento, a atenção aos detalhes e o capricho superaram minhas expectativas. Além disso, seu profissionalismo fez toda a diferença.'
    },
    {
      comment: 'É muito bom encontrar um profissional que realmente ama o que faz e entrega um serviço de qualidade. Com certeza vou te recomendar e, quando precisar de algo de novo, já sei com quem contar! Obrigado de verdade! Muito obrigado pelo comprometimento e excelência!'
    },
    {
      comment: 'Se você está procurando um marceneiro de confiança e competente, Alessandro é a escolha certa. Recomendo-o sem hesitação!'
    },
    {
      comment: 'Venho agradecer pelo serviço prestado. O quarto da minha filha ficou maravilhoso e bem planejado. Qualidade e serviço, perfeito!'
    }
  ];
}

interface IFeedbacks {
  comment: string
}
