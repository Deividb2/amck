import { Component } from '@angular/core';
import { WarningComponent } from "../components/warning/warning.component";
import { FooterComponent } from "../../../../components/client/footer/footer.component";

@Component({
  selector: 'app-living',
  standalone: true,
  imports: [WarningComponent, FooterComponent],
  templateUrl: './living.component.html',
  styleUrl: './living.component.scss'
})
export class LivingComponent {

}
