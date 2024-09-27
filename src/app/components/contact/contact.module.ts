import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';

// Icons
import { NgIconsModule } from '@ng-icons/core';
import { matMenu as menu, matClose as close, matWhatsapp as whats, matArrowForwardIos as arrow } from '@ng-icons/material-icons/baseline';
import { ionLogoInstagram as insta, ionLogoYoutube as youtube } from '@ng-icons/ionicons'

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ 
      menu, close, whats, insta, youtube, arrow 
    }),
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
