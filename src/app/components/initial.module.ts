import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { HeaderComponent } from './header/header.component';

import { NgIconsModule } from '@ng-icons/core';
import { matMenu as menu, matClose as close } from '@ng-icons/material-icons/baseline';
import { BannerComponent } from './banner/banner.component';
import { PhasesComponent } from './phases/phases.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { WhatsBtnComponent } from './whats-btn/whats-btn.component';
// import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    PhasesComponent,
    ContactComponent,
    FaqComponent,
    WhatsBtnComponent,
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ menu, close })
  ],
  exports: [
    HeaderComponent,
    BannerComponent,
    PhasesComponent,
    ContactComponent,
    FaqComponent,
    WhatsBtnComponent,
  ]
})
export class InitialModule { }
