import { Component } from '@angular/core';

import { Etapas } from '../../data/etapas';

@Component({
  selector: 'app-phases',
  templateUrl: './phases.component.html',
  styleUrl: './phases.component.scss'
})
export class PhasesComponent {
  Etapas = Etapas
}
