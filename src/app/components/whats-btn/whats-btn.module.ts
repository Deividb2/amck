import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsBtnComponent } from './whats-btn.component';

import { NgIconsModule } from '@ng-icons/core';
import { matWhatsapp as whats } from '@ng-icons/material-icons/baseline';

@NgModule({
  declarations: [
    WhatsBtnComponent
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ 
      whats 
    }),
  ],
  exports: [
    WhatsBtnComponent
  ]
})
export class WhatsBtnModule { }
