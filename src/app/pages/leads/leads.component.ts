import { Component } from '@angular/core';
import { BannerComponent } from "./components/banner/banner.component";
import { CtaOfferComponent } from "./components/cta-offer/cta-offer.component";
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';

@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [BannerComponent, CardsComponent, CtaOfferComponent, FooterComponent],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.scss'
})
export class LeadsComponent {

}
