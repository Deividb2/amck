import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './components/questions/questions.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, QuestionsComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

}
