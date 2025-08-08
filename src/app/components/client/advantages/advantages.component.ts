import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matDesignServices, matTipsAndUpdates, matTimer, matConstruction, matTrendingUp, matDiscount } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-advantages',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ matDesignServices, matTipsAndUpdates, matTimer, matConstruction, matTrendingUp, matDiscount })],
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.scss'
})
export class AdvantagesComponent {
  advantages: ReadonlyArray<{ icon: string; title: string; text: string }> = [
    {
      icon: 'matTrendingUp',
      title: 'Valorização do imóvel',
      text: 'Imóveis com planejados costumam transmitir que o proprietário investiu e cuidou bem do espaço, aumentando a confiança na qualidade geral do imóvel.'
    },
    {
      icon: 'matTimer',
      title: 'Durabilidade',
      text: 'Móveis planejados costumam ter vida útil maior do que móveis prontos podendo durar a vida inteira. Além do mais, trabalhamos com materiais de qualidade como madeira MDF, dobradiças e puxadores reforçados.'
    },
    {
      icon: 'matConstruction',
      title: 'Funcionalidade',
      text: 'Projetados para atender a rotina de quem usa, os planejados oferecem auxílio específicos como espaço para eletrodomésticos, nichos, gavetas internas, cabideiros basculantes etc.'
    },
    {
      icon: 'matDesignServices',
      title: 'Aproveitamento do espaço',
      text: 'Os móveis planejados são feitos sob medida, ou seja, ocupam o espaço de maneira eficiente, agregando em organização e fazendo o ambiente parecer mais espaçoso.'
    },
    {
      icon: 'matTipsAndUpdates',
      title: 'Personalização',
      text: 'Ambientes com móveis planejados costumam ter um visual mais hormônico e sofisticado. Toda essa beleza gera uma satisfação muito maior no dia a dia do cliente.'
    },
    {
      icon: 'matDiscount',
      title: 'Custo-benefício',
      text: 'Apesar do investimento inicial, a resistência e a longa vida útil fazem dos móveis planejados uma escolha econômica e inteligente, valorizando ainda mais o imóvel.'
    },
  ]
}
