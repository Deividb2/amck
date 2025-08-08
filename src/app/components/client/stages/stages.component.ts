import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matStickyNote2Outline, matConstructionOutline, matMapsHomeWorkOutline, matBuildOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-stages',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ matMapsHomeWorkOutline, matStickyNote2Outline, matConstructionOutline, matBuildOutline })],
  templateUrl: './stages.component.html',
  styleUrl: './stages.component.scss',
})
export class StagesComponent {
  protected stages: ReadonlyArray<{ icon: string, title: string, text: string }> = [
    {
      icon: "matMapsHomeWorkOutline",
      title: "Visita",
      text: "Realizamos uma visita técnica para medir seu ambiente e entender seu estilo, suas ideias e preferências para fabricar um móvel sob medida de verdade",
    },
    {
      icon: "matStickyNote2Outline",
      title: "Orçamento",
      text: "Com as medidas e preferências definidas, elaboraremos um orçamento transparente, justo e 100% detalhado - sem surpresas.",
    },
    {
      icon: "matConstructionOutline",
      title: "Fabricação",
      text: "Após a aprovação do orçamento, iniciamos a fabricação com materiais de qualidade e atenção a cada detalhe - do corte à finalização.",
    },
    {
      icon: "matBuildOutline",
      title: "Montagem",
      text: "Após 40 dias de fabricação, entregaremos o material em sua residência e iniciaremos o processo de montagem com profissionais experientes.",
    },
  ];
}
