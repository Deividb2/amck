import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matArrowForward } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ matArrowForward })],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

}