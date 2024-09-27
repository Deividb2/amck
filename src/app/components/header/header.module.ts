import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

// Icons
import { NgIconsModule } from '@ng-icons/core';
import { matMenu as menu, matClose as close } from '@ng-icons/material-icons/baseline';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ 
      menu, close 
    }),
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
