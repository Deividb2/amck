import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailBudgetService }  from "../../../services/emails/email-budget.service";

@Component({
  selector: 'app-budget-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './budget-form.component.html',
  styleUrl: './budget-form.component.scss'
})
export class BudgetFormComponent {

  #budgetForm = inject(FormBuilder)
  #budgetEmail = inject(EmailBudgetService)

  budgetForm = this.#budgetForm.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
    email: ['', [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(50)]],
    tel: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(13)]],
    address: ['', [Validators.required, Validators.minLength(5)]],
    environments: [''],
    estimate: [''],
    message: ['', [Validators.maxLength(4000)]]
  })

  sendDatas($event: Event) {
    $event.preventDefault()
    $event.stopPropagation()
    this.validadeBudgetFormEmail()
  }

  resetInput() {
    this.budgetForm.reset()
  }

  validadeBudgetFormEmail() {
    if(this.budgetForm.valid) {
      this.#budgetEmail.submitBudgetFormEmail(this.budgetForm.value)
      alert("Orçamento enviado com sucesso!")
      this.resetInput()
    } else {
      alert("Informe os dados corretamente")
    }
  }
}