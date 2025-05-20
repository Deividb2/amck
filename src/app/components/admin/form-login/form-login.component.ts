import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroEyeSolid as openEye, heroEyeSlashSolid as closedEye } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [NgIcon, ReactiveFormsModule],
  providers: [provideIcons({ openEye, closedEye })],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss'
})
export class FormLoginComponent {
  statePassword: boolean = true
  iconStatePassword: string = 'openEye'
  inputPasswordType: string = 'password'

  #loginForm = inject(FormBuilder)

  loginForm = this.#loginForm.group({
    name: [''],
    password: ['']
  })

  showPassword() {
    this.statePassword = !this.statePassword
    if(this.statePassword) {
      this.iconStatePassword = 'openEye'
      this.inputPasswordType = 'password'
    } else {
      this.iconStatePassword = 'closedEye'
      this.inputPasswordType = 'text'
    }
  }

  sendInfos($event: Event) {
    $event.preventDefault()
    $event.stopPropagation()
    alert(`${this.loginForm.controls.name.value} ${this.loginForm.controls.password.value}`)
  }
}
