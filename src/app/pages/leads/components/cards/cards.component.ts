import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matLocalOffer } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ matLocalOffer })],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  cardsData: ReadonlyArray<ICardsData> = [
    {
      icon: 'matLocalOffer',
      title: 'Confira nossos produtos em primeira mão',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti neque dignissimos facere, mollitia explicabo quae animi excepturi.'
    },
    {
      icon: 'matLocalOffer',
      title: 'Ofertas imperdíveis',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti neque dignissimos facere, mollitia explicabo quae animi excepturi.'
    },
    {
      icon: 'matLocalOffer',
      title: 'Contate diretamente um marceneiro',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti neque dignissimos facere, mollitia explicabo quae animi excepturi.'
    },
    {
      icon: 'matLocalOffer',
      title: 'Saiba como trabalhamos',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti neque dignissimos facere, mollitia explicabo quae animi excepturi.'
    },
    {
      icon: 'matLocalOffer',
      title: 'Montador pertinho de você',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti neque dignissimos facere, mollitia explicabo quae animi excepturi.'
    },
    {
      icon: 'matLocalOffer',
      title: 'Acompanhe a fabricação do seu produto de perto',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti neque dignissimos facere, mollitia explicabo quae animi excepturi.'
    },
  ]

}

interface ICardsData {
  icon: string
  title: string
  subtitle: string
}
