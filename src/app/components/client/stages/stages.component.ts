import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matAdd } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-stages',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ matAdd })],
  templateUrl: './stages.component.html',
  styleUrl: './stages.component.scss',
})
export class StagesComponent {
  protected stages: ReadonlyArray<IStages> = [
    {
      title: 'Projeção',
      text: 'Entenderemos suas necessidades e criaremos um projeto exclusivo que se adeque ao seu ambiente',
    },
    {
      title: 'Contratação',
      text: 'Prepararemos uma proposta que cabe no seu bolso, já incluindo materiais e mão de obra.',
    },
    {
      title: 'Entrega',
      text: 'Entregaremos tudo na sua residência, na data agendada para não atrasar seu projeto.',
    },
    {
      title: 'Montagem',
      text: 'Iniciaremos o processo de montagem e estaremos abertos a sujestões de melhoria.',
    },
  ];
}

interface IStages {
  title: string;
  text: string;
}
