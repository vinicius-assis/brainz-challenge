import type { ApiResponse } from '../types/api';

export const mockApiResponse: ApiResponse = {
    categories: [
        {
            id: 'matematica',
            name: 'Matemática',
            topics: [
                {
                    id: '1',
                    title: 'A Matemática: A Ciência dos Números e Formas',
                    description: 'Entenda o que é Matemática, sua relevância, métodos de resolução e como ela analisa padrões e quantidades em diversas situações.'
                },
                {
                    id: '2',
                    title: 'Níveis de Abstração em Matemática',
                    description: 'Explore como a Matemática se organiza, desde números e operações até estruturas complexas, e compreenda a beleza dos conceitos matemáticos.'
                },
                {
                    id: '3',
                    title: 'Propriedades dos Números',
                    description: 'Descubra o que distingue os números: suas operações, relações, e como eles se comportam em diferentes contextos.'
                },
                {
                    id: '4',
                    title: 'Método Científico em Matemática',
                    description: 'Aprenda como os matemáticos formulam teoremas, realizam provas e constroem o conhecimento matemático.'
                }
            ]
        },
        {
            id: 'linguagens',
            name: 'Linguagens',
            topics: [
                {
                    id: '1',
                    title: 'A Arte da Comunicação em Língua Portuguesa',
                    description: 'Compreenda a importância da comunicação em português, suas técnicas e como se aplica em diferentes contextos.'
                },
                {
                    id: '2',
                    title: 'Estruturas da Comunicação em Português',
                    description: 'Aprenda a organizar suas ideias, desde a introdução até a conclusão, e entenda a relevância da coesão e coerência.'
                },
                {
                    id: '3',
                    title: 'Componentes da Comunicação em Português',
                    description: 'Descubra o que caracteriza uma comunicação eficaz: clareza, argumentação, estilo e muito mais.'
                },
                {
                    id: '4',
                    title: 'Técnicas de Comunicação em Língua Portuguesa',
                    description: 'Entenda como os autores desenvolvem suas ideias, revisam seus textos e aprimoram suas habilidades de comunicação.'
                }
            ]
        },
        {
            id: 'natureza',
            name: 'Ciências da Natureza',
            topics: [
                {
                    id: '1',
                    title: 'A Ciência da Biologia',
                    description: 'Descubra o que é Biologia, sua importância, métodos científicos e como ela estuda a vida em todos os seus níveis.'
                },
                {
                    id: '2',
                    title: 'Níveis de Organização da Vida',
                    description: 'Explore como a vida se organiza, do átomo aos biossistemas, e compreenda a complexidade dos seres vivos.'
                },
                {
                    id: '3',
                    title: 'Características dos Seres Vivos',
                    description: 'Descubra o que caracteriza uma comunicação eficaz: clareza, argumentação, estilo e muito mais.'
                },
                {
                    id: '4',
                    title: 'Método Científico em Biologia',
                    description: 'Aprenda como os biólogos formulam hipóteses, realizam experimentos e constroem o conhecimento biológico.'
                }
            ]
        },
        {
            id: 'humanas',
            name: 'Ciências Humanas',
            topics: [
                {
                    id: '1',
                    title: 'A Ciência da História',
                    description: 'Descubra o que é História, sua importância, métodos científicos e como ela estuda o passado e o presente.'
                },
                {
                    id: '2',
                    title: 'Níveis de Organização da História',
                    description: 'Explore como a história se organiza, desde a pré-história até os dias atuais, e compreenda a complexidade dos eventos e acontecimentos.'
                },
                {
                    id: '3',
                    title: 'Características das Sociedades Humanas',
                    description: 'Descubra o que caracteriza a história: suas fontes, métodos e como ela se relaciona com o presente.'
                },
                {
                    id: '4',
                    title: 'Método de Pesquisa Histórica',
                    description: 'Aprenda como os historiadores pesquisam, analisam e interpretam o passado, contribuindo para o conhecimento humano.'
                }
            ]
        }
    ]
};
