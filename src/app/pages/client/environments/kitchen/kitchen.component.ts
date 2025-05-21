import { Component } from '@angular/core';
import { WarningComponent } from "../components/warning/warning.component";
import { FooterComponent } from "../../../../components/client/footer/footer.component";

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [WarningComponent, FooterComponent],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.scss'
})
export class KitchenComponent {

}
