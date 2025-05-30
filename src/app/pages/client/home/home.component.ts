import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/client/header/header.component";
import { ProjectsComponent } from "../../../components/client/projects/projects.component";
import { AboutComponent } from "../../../components/client/about/about.component";
import { FaqComponent } from "../../../components/client/faq/faq.component";
import { WhatsappComponent } from "../../../components/client/whatsapp/whatsapp.component";
import { FooterComponent } from "../../../components/client/footer/footer.component";
import { FeedbackComponent } from "../../../components/client/feedback/feedback.component";
import { Banner2Component } from "../../../components/client/banner2/banner2.component";
import { Advantages2Component } from "../../../components/client/advantages2/advantages2.component";
import { BudgetFormComponent } from "../../../components/client/budget-form/budget-form.component";
import { StagesComponent } from "../services/components/stages/stages.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    Banner2Component,
    FeedbackComponent,
    Advantages2Component,
    ProjectsComponent,
    AboutComponent,
    BudgetFormComponent,
    FaqComponent,
    WhatsappComponent,
    FooterComponent,
    StagesComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
