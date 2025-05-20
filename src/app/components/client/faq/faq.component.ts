import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { QuestionsComponent } from './questions/questions.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, QuestionsComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  faqDatas: ReadonlyArray<{ question: string, response: string }> = [
    {
      question: "Quais são os meios de pagamentos?",
      response: "Atualmente, nossos meios de pagamentos são: pix, débito, crédito e dinheiro"
    },
    {
      question: "Onde a AMCK atua?",
      response: "Atuamos em toda capital do Rio de Janeiro. Caso você deseje um profissional perto da sua residência, não hesite em nos contatar!"
    },
    {
      question: "Quais são as garantias?",
      response: "Você tem direito a 1 ano de assistência, caso houver algum problema com o móvel. "
    },
    {
      question: "Qual é o prazo para entrega dos móveis planejados?",
      response: "O prazo de entrega varia dependendo do projeto. Sempre buscamos ser fiel ao prazo pré-estabelecido."
    },
    {
      question: "Preciso pagar para fazer um orçamento?",
      response: "Não!! Aqui você faz um orçamento totalmente gratuito, sem pressão e sem compromisso."
    },
    {
      question: "E se o orçamento ultrapassar meu limite financeiro?",
      response: "Sempre visamos propor um preço justo aos nossos parceiros. Portanto, em caso de necessidade, oferecemos uma flexibilidade na negociação de valores."
    }
  ]
}