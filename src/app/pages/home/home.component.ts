import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { AdvantagesComponent } from '../../components/advantages/advantages.component';
import { ProjectsComponent } from "../../components/projects/projects.component";
import { StagesComponent } from "../../components/stages/stages.component";
import { AboutComponent } from "../../components/about/about.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { FaqComponent } from "../../components/faq/faq.component";
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";
import { FeedbacksComponent } from "../../components/feedbacks/feedbacks.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, AdvantagesComponent, ProjectsComponent, AboutComponent, ContactComponent, FaqComponent, WhatsappComponent, FeedbacksComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
