import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-questions',
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
