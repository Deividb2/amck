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
      question: "Como posso solicitar um orçamento?",
      response: "Para solicitar um orçamento, preencha o formulário disponível em nosso site ou entre em contato através das nossas mídias sociais."
    },
    {
      question: "Quais são os meios de pagamentos?",
      response: "Atualmente, nossos meios de pagamentos são: pix, débito, crédito e dinheiro"
    },
    {
      question: "Como é feita a cobrança do móvel planejado?",
      response: "A cobrança é feita de acordo com o projeto, com o valor proporcional à quantidade de móveis, tipos de acabamentos, puxadores, ferragens etc."
    },
    {
      question: "Quais regiões a AMCK trabalha?",
      response: "Atendemos em toda cidade do Rio de Janeiro."
    },
    {
      question: "Quais são as garantias oferecidas?",
      response: "Oferecemos 1 ano de assistência técnica, caso houver algum problema com o móvel. "
    },
    {
      question: "Qual é o prazo para entrega dos móveis planejados?",
      response: "Buscamos entregar nossos armários em até 40 dias após o acordo."
    },
    {
      question: "Preciso pagar para fazer um orçamento?",
      response: "Não, aqui você faz um orçamento totalmente gratuito, sem pressão e sem compromisso."
    },
    {
      question: "E se o orçamento ultrapassar meu limite financeiro?",
      response: "Sempre visamos propor um preço justo aos nossos parceiros. Além de oferecermos flexibilidade na negociação de valores."
    }
  ]
}