import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matAdd, matRemove } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ matAdd, matRemove })],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  @Input() question!: string
  @Input() response!: string

  arrowName: string = "matAdd"
  openFaq: boolean = false

  hendleFaq() {
    this.openFaq = !this.openFaq
    this.openFaq ? this.arrowName = "matRemove" : this.arrowName = "matAdd"
  }
}
