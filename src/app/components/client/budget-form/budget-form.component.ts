import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-budget-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './budget-form.component.html',
  styleUrl: './budget-form.component.scss'
})
export class BudgetFormComponent {

  #budgetForm = inject(FormBuilder)

  budgetForm = this.#budgetForm.group({
    name: ['', [Validators.minLength(2), Validators.maxLength(60)]],
    email: ['', [Validators.email, Validators.minLength(10), Validators.maxLength(50)]],
    tel: ['', [ Validators.minLength(11), Validators.maxLength(13)]],
    adress: ['', [Validators.minLength(5)]],
    environments: [''],
    estimate: [''],
    message: ['', [Validators.maxLength(4000)]]
  })

  sendDatas($event: Event) {
    $event.preventDefault()

    const name = this.budgetForm.controls.name.value
    const email = this.budgetForm.controls.email.value
    const tel = this.budgetForm.controls.tel.value
    const adress = this.budgetForm.controls.adress.value
    const environments = this.budgetForm.controls.environments.value
    const estimate = this.budgetForm.controls.estimate.value
    const message = this.budgetForm.controls.message.value

    if(this.budgetForm.valid) {
      alert(`${name} ${email} ${tel} ${adress} ${environments} ${estimate} ${message}`)
      alert("Formulário enviado!")
    } else {
      alert('Informações inválidas')
    }
  }
}
