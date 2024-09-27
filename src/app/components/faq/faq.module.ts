import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { QuestionsComponent } from './components/questions/questions.component';

// Icons
import { NgIconsModule } from '@ng-icons/core';
import { matArrowForwardIos as arrow } from '@ng-icons/material-icons/baseline';

@NgModule({
  declarations: [
    FaqComponent,
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ 
      arrow 
    }),
  ],
  exports: [
    FaqComponent,
    QuestionsComponent
  ]
})
export class FaqModule { }
