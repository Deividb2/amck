export const Etapas: Array<IEtapas> = [
    {
        title: 'Projeção',
        text: 'Entenderemos suas necessidades e criaremos um projeto exclusivo que se adeque ao seu ambiente'
    },
    {
        title: 'Contratação',
        text: 'Prepararemos uma proposta que cabe no seu bolso, já incluindo materiais e mão de obra.'
    },
    {
        title: 'Entrega',
        text: 'Entregaremos tudo na sua residência, na data agendada para não atrasar seu projeto.'
    },
    {
        title: 'Montagem',
        text: 'Iniciaremos o processo de montagem e estaremos abertos a sujestões de melhoria.'
    },
]

interface IEtapas {
    title: string,
    text: string
}