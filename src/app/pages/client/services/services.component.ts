import { Component } from '@angular/core';
import { BannerServiceComponent } from "./components/banner-service/banner-service.component";
import { StagesComponent } from "../../../components/client/stages/stages.component";
import { BudgetFormComponent } from "../../../components/client/budget-form/budget-form.component";
import { WhatsappComponent } from "../../../components/client/whatsapp/whatsapp.component";
import { FooterComponent } from "../../../components/client/footer/footer.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    BannerServiceComponent,
    StagesComponent,
    BudgetFormComponent,
    WhatsappComponent,
    FooterComponent
],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})

export class ServicesComponent {}