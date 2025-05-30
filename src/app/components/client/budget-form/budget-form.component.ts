import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailBudgetService }  from "../../../services/emails/email-budget.service";
import { Dialog } from '@angular/cdk/dialog'

// components
import { MessageErrorFormComponent } from '../dialogs/message-error-form/message-error-form.component';
import { MessageConfirmationFormComponent } from '../dialogs/message-confirmation-form/message-confirmation-form.component';

@Component({
  selector: 'app-budget-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './budget-form.component.html',
  styleUrl: './budget-form.component.scss'
})
export class BudgetFormComponent {

  #budgetForm = inject(FormBuilder)
  #budgetEmail = inject(EmailBudgetService)
  #dialog = inject(Dialog)

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
      this.openDialogMessageConfirmationForm()
      this.resetInput()
    } else {
      this.openDialogMessageErrorForm()
    }
  }

  openDialogMessageErrorForm() {
    this.#dialog.open(MessageErrorFormComponent)
  }

  openDialogMessageConfirmationForm() {
    this.#dialog.open(MessageConfirmationFormComponent)
  }

  closeDialog() {
    setTimeout(() => {
      this.#dialog.closeAll()
    }, 3000)
  }
}