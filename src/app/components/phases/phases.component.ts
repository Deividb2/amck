import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Etapas } from '../../../assets/data/etapas';

@Component({
  selector: 'app-phases',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './phases.component.html',
  styleUrl: './phases.component.scss'
})
export class PhasesComponent {
  Etapas = Etapas
}
