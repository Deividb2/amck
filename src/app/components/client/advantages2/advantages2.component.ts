import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matDesignServices, matTipsAndUpdates, matTimer, matConstruction, matTrendingUp, matDiscount } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-advantages2',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ matDesignServices, matTipsAndUpdates, matTimer, matConstruction, matTrendingUp, matDiscount })],
  templateUrl: './advantages2.component.html',
  styleUrl: './advantages2.component.scss'
})
export class Advantages2Component {
  advantages: ReadonlyArray<{ icon: string; title: string; text: string }> = [
    {
      icon: 'matDesignServices',
      title: 'Aproveitamento do espaço',
      text: 'Os móveis planejados são feitos sob medida, garantindo um encaixe perfeito no ambiente e maximizando cada centímetro disponível.'
    },
    {
      icon: 'matTipsAndUpdates',
      title: 'Personalização',
      text: 'Escolha cores, materiais e acabamentos que combinem com seu estilo e deixe sua casa do jeito que sempre imaginou.'
    },
    {
      icon: 'matTimer',
      title: 'Durabilidade',
      text: 'Fabricados com materiais de alta qualidade, os móveis planejados têm acabamentos atraentes e maior resistência a longo prazo.'
    },
    {
      icon: 'matConstruction',
      title: 'Funcionalidade',
      text: 'Projetados para atender às suas necessidades, eles oferecem compartimentos estratégicos que facilitam a organização e o dia a dia.'
    },
    {
      icon: 'matTrendingUp',
      title: 'Valorização do imóvel',
      text: 'Além de deixarem o ambiente mais sofisticado e elegante, móveis planejados agregam valor ao seu imóvel.'
    },
    {
      icon: 'matDiscount',
      title: 'Custo-benefício',
      text: 'Apesar do investimento inicial, a resistência e a longa vida útil fazem dos móveis planejados uma escolha econômica e inteligente.'
    },
  ]
}
