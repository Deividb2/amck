import { Component } from '@angular/core';
import { BannerComponent } from "./components/banner/banner.component";
import { CtaOfferComponent } from "./components/cta-offer/cta-offer.component";
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from '../../../components/client/footer/footer.component';

@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [BannerComponent, CardsComponent, CtaOfferComponent, FooterComponent],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.scss'
})
export class LeadsComponent {

}
