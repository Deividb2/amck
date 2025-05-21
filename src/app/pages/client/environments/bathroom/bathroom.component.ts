import { Component } from '@angular/core';
import { WarningComponent } from "../components/warning/warning.component";
import { FooterComponent } from "../../../../components/client/footer/footer.component";

@Component({
  selector: 'app-bathroom',
  standalone: true,
  imports: [WarningComponent, FooterComponent],
  templateUrl: './bathroom.component.html',
  styleUrl: './bathroom.component.scss'
})
export class BathroomComponent {

}
