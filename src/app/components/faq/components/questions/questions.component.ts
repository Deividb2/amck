import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

// Icons
import { matArrowForwardIos as arrow } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ arrow })],
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
