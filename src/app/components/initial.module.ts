import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { HeaderModule } from './header/header.module';
import { BannerModule } from './banner/banner.module';
import { PhasesModule } from './phases/phases.module';
import { ContactModule } from './contact/contact.module';
import { FaqModule } from './faq/faq.module';
import { WhatsBtnModule } from './whats-btn/whats-btn.module';
import { DepoimentsModule } from './depoiments/depoiments.module';
import { ProjectsModule } from './projects/projects.module';
import { AboutUsModule } from './about-us/about-us.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    BannerModule,
    PhasesModule,
    ContactModule,
    FaqModule,
    WhatsBtnModule,
    DepoimentsModule,
    ProjectsModule,
    AboutUsModule,
    FooterModule
  ],
  exports: [
    CommonModule,
    HeaderModule,
    BannerModule,
    PhasesModule,
    ContactModule,
    FaqModule,
    WhatsBtnModule,
    DepoimentsModule,
    ProjectsModule,
    AboutUsModule,
    FooterModule
  ]
})
export class InitialModule { }
