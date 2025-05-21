import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matStickyNote2Outline as orcamento, matConstructionOutline, matMapsHomeWorkOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-stages',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ matMapsHomeWorkOutline, orcamento, matConstructionOutline })],
  templateUrl: './stages.component.html',
  styleUrl: './stages.component.scss',
})
export class StagesComponent {
  protected stages: ReadonlyArray<{ icon: string, title: string, text: string }> = [
    {
      icon: "matMapsHomeWorkOutline",
      title: "Visita",
      text: "Entenderemos suas necessidades e tiraremos as medidas do seu ambiente",
    },
    {
      icon: "orcamento",
      title: "Orçamento",
      text: "Prepararemos uma proposta que cabe no seu bolso, já incluindo materiais e mão de obra.",
    },
    {
      icon: "matConstructionOutline",
      title: "Fabricação",
      text: "Entregaremos tudo na sua residência, na data agendada para não atrasar seu projeto.",
    },
    {
      icon: "matConstructionOutline",
      title: "Montagem",
      text: "Iniciaremos o processo de entrega e montagem, e estaremos abertos a sujestões de melhoria.",
    },
  ];
}
