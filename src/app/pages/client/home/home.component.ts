import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/client/header/header.component";
import { BannerComponent } from "../../../components/client/banner/banner.component";
import { ProjectsComponent } from "../../../components/client/projects/projects.component";
import { AboutComponent } from "../../../components/client/about/about.component";
import { FaqComponent } from "../../../components/client/faq/faq.component";
import { WhatsappComponent } from "../../../components/client/whatsapp/whatsapp.component";
import { FooterComponent } from "../../../components/client/footer/footer.component";
import { FeedbackComponent } from "../../../components/client/feedback/feedback.component";
import { BudgetFormComponent } from "../../../components/client/budget-form/budget-form.component";
import { StagesComponent } from "../../../components/client/stages/stages.component";
import { AdvantagesComponent } from "../../../components/client/advantages/advantages.component";
import { FeedbackEndComponent } from "../../../components/client/feedback-end/feedback-end.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    FeedbackComponent,
    ProjectsComponent,
    AboutComponent,
    BudgetFormComponent,
    FaqComponent,
    WhatsappComponent,
    FooterComponent,
    StagesComponent,
    AdvantagesComponent,
    FeedbackEndComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
