export const Etapas: Array<IEtapas> = [
    {
        title: 'Personalização',
        text: 'Entenderemos suas necessidades e criaremos um projeto exclusivo'
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
        text: 'Nossos prestadores iniciarão o serviço e um especialista Leroy Merlin estará sempre de suporte.'
    },
]

interface IEtapas {
    title: string,
    text: string
}