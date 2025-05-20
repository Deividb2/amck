import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/client/header/header.component";
import { BannerComponent } from "../../../components/client/banner/banner.component";
import { AdvantagesComponent } from '../../../components/client/advantages/advantages.component';
import { ProjectsComponent } from "../../../components/client/projects/projects.component";
import { StagesComponent } from "../../../components/client/stages/stages.component";
import { AboutComponent } from "../../../components/client/about/about.component";
import { ContactFormComponent } from "../../../components/client/contact-form/contact-form.component";
import { FaqComponent } from "../../../components/client/faq/faq.component";
import { WhatsappComponent } from "../../../components/client/whatsapp/whatsapp.component";
import { FeedbacksComponent } from "../../../components/client/feedbacks/feedbacks.component";
import { FooterComponent } from "../../../components/client/footer/footer.component";
import { FeedbackComponent } from "../../../components/client/feedback/feedback.component";
import { Banner2Component } from "../../../components/client/banner2/banner2.component";
import { NewsletterComponent } from "../../../components/client/newsletter/newsletter.component";
import { Advantages2Component } from "../../../components/client/advantages2/advantages2.component";
import { BudgetFormComponent } from "../../../components/client/budget-form/budget-form.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, AdvantagesComponent, ProjectsComponent, AboutComponent, ContactFormComponent, FaqComponent, WhatsappComponent, FooterComponent, FeedbackComponent, Banner2Component, NewsletterComponent, Advantages2Component, BudgetFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
