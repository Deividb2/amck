import { Component } from '@angular/core';
import { HeaderServiceComponent } from "./components/header-service/header-service.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [HeaderServiceComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
