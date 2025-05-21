import { Component } from '@angular/core';
import { HeaderServiceComponent } from "./components/header-service/header-service.component";
import { StagesComponent } from "./components/stages/stages.component";
import { WhatsappComponent } from "../../../components/client/whatsapp/whatsapp.component";
import { FooterComponent } from "../../../components/client/footer/footer.component";
import { BudgetFormComponent } from "../../../components/client/budget-form/budget-form.component";
import { BannerServiceComponent } from "./components/banner-service/banner-service.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    HeaderServiceComponent,
    StagesComponent,
    BudgetFormComponent,
    WhatsappComponent,
    FooterComponent,
    BannerServiceComponent
],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
