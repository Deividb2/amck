import { Component } from '@angular/core';
import { WarningComponent } from "../components/warning/warning.component";
import { FooterComponent } from "../../../../components/client/footer/footer.component";

@Component({
  selector: 'app-dormitory',
  standalone: true,
  imports: [WarningComponent, FooterComponent],
  templateUrl: './dormitory.component.html',
  styleUrl: './dormitory.component.scss'
})
export class DormitoryComponent {

}
