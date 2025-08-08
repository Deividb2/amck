import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matStar } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-feedback-end',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ matStar })],
  templateUrl: './feedback-end.component.html',
  styleUrl: './feedback-end.component.scss'
})
export class FeedbackEndComponent {
  comments: ReadonlyArray<{text: string}> = [
    {
      text : "Tenho o prazer de recomendar o Alessandro, um excelente marceneiro com quem trabalho há mais de seis anos. Durante esse período, indiquei o trabalho dele a várias pessoas e todas ficaram extremamente satisfeitas."
    },
    {
      text: "Alessandro é um profissional de confiança, dedicado e habilidoso, sempre entregando serviços de alta qualidade. Além disso, ele tem um preço justo e é extremamente pontual, sempre cumprindo os prazos estabelecidos."
    },
    {
      text: "Gostaria de expressar minha satisfação com o excelente trabalho realizado! A qualidade do acabamento, a atenção aos detalhes e o capricho superaram minhas expectativas. Além disso, seu profissionalismo fez toda a diferença."
    }, 
    {
      text: "Trabalho incrível, já fiz projetos com ele super indico"
    },
    {
      text: "Ficou maravilhoso! Eu adorei e super indico"
    },
    {
      text: "Pra cima meu irmão 🚀 Excelente profissional!"
    }
  ]
}
