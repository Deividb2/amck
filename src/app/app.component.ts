import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PhasesComponent } from './components/phases/phases.component';
import { DepoimentsComponent } from './components/depoiments/depoiments.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { WhatsBtnComponent } from './components/whats-btn/whats-btn.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    BannerComponent,
    ProjectsComponent,
    PhasesComponent,
    DepoimentsComponent,
    AboutUsComponent,
    FaqComponent,
    ContactComponent,
    WhatsBtnComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent { }
