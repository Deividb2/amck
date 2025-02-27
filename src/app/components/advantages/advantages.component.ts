import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-advantages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.scss'
})
export class AdvantagesComponent {

  advantages: ReadonlyArray<IAdvantages> = [
    {
      title: 'Aproveitamento do espaço',
      text: 'Os móveis planejados são feitos sob medida, garantindo um encaixe perfeito no ambiente e maximizando cada centímetro disponível.'
    },
    {
      title: 'Personalização',
      text: 'Escolha cores, materiais e acabamentos que combinem com seu estilo e deixe sua casa do jeito que sempre imaginou.'
    },
    {
      title: 'Durabilidade',
      text: 'Fabricados com materiais de alta qualidade, os móveis planejados têm acabamentos atraentes e maior resistência a longo prazo.'
    },
    {
      title: 'Funcionalidade',
      text: 'Projetados para atender às suas necessidades, eles oferecem compartimentos estratégicos que facilitam a organização e o dia a dia.'
    },
    {
      title: 'Valorização do imóvel',
      text: 'Além de deixarem o ambiente mais sofisticado e elegante, móveis planejados agregam valor ao seu imóvel.'
    },
    {
      title: 'Custo-benefício',
      text: 'Apesar do investimento inicial, a resistência e a longa vida útil fazem dos móveis planejados uma escolha econômica e inteligente.'
    },
  ]

}

interface IAdvantages {
  title: string
  text: string
}