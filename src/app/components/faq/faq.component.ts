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

  faqDatas: ReadonlyArray<IFaqDatas> = [
    {
      question: "Quais são os meios de pagamentos?",
      response: "Atualmente, nossos meios de pagamentos são: pix, débito, crédito e dinheiro"
    },
    {
      question: "Onde a AMCK atua?",
      response: "Atualmente, a AMCK atua em toda capital do Rio de Janeiro. Caso você deseje um profissional perto da sua residência, não hesite em nos contatar!"
    },
    {
      question: "Quais são as garantias?",
      response: "Na AMCK, você tem direito a 1 ano de assistência, caso houver algum problema com o móvel. "
    },
    {
      question: "Qual é o prazo médio para entrega dos móveis planejados?",
      response: "O prazo de entrega varia muito dependendo do projeto. A AMCK sempre busca ser fiel ao prazo pré-estabelecido."
    },
    {
      question: "Preciso pagar para fazer um orçamento?",
      response: "Não!! Aqui você faz um orçamento totalmente gratuito, sem pressão e sem compromisso."
    },
    {
      question: "Como posso solicitar um orçamento?",
      response: "Fique à vontade de nos contatar por qualquer meio comunicativo que desejar. Se desejar uma comunicação mais livre e acessível, entre em contato diretamente pelo WhatsApp."
    },
    {
      question: "É possível alterar o design do projeto mesmo depois de aprovado?",
      response: "Se o cliente aprovou um projeto mas no decorrer do processo não gostou de certos detalhes, o profissional avaliará a mudança a ser feita e entregará o melhor resultado possível! No entanto, dependendo da mundança, o cliente deve estar ciente que o valor final do serviço pode ser alterado."
    },
    {
      question: "E se o orçamento ultrapassar meu limite financeiro?",
      response: "Sempre visamos propor um preço justo aos nossos parceiros. Portanto, em caso de necessidade, oferecemos uma flexibilidade na negociação de valores."
    }
  ]
}

interface IFaqDatas {
  question: string
  response: string
}
