import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matArrowForwardIos as arrow } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ arrow })],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  @Input() question!: string
  @Input() response!: string

  hendleResponseProp: boolean = false
  hendleResponse() {
    this.hendleResponseProp = !this.hendleResponseProp
  }
}
