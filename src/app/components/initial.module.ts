import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Icons
import { NgIconsModule } from '@ng-icons/core';
import { matMenu as menu, matClose as close, matWhatsapp as whats, matArrowForwardIos as arrow } from '@ng-icons/material-icons/baseline';
import { ionLogoInstagram as insta, ionLogoYoutube as youtube } from '@ng-icons/ionicons'


// Components
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { PhasesComponent } from './phases/phases.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { QuestionsComponent } from './faq/components/questions/questions.component';
import { WhatsBtnComponent } from './whats-btn/whats-btn.component';
import { DepoimentsComponent } from './depoiments/depoiments.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    ProjectsComponent,
    PhasesComponent,
    DepoimentsComponent,
    AboutUsComponent,
    ContactComponent,
    FaqComponent,
    QuestionsComponent,
    WhatsBtnComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ menu, close, whats, insta, youtube, arrow }),
  ],
  exports: [
    HeaderComponent,
    BannerComponent,
    ProjectsComponent,
    PhasesComponent,
    DepoimentsComponent,
    AboutUsComponent,
    ContactComponent,
    FaqComponent,
    QuestionsComponent,
    WhatsBtnComponent,
    FooterComponent
  ]
})
export class InitialModule { }
