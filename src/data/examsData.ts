export interface Exam {
    id: string
    category: string
    title: string
    daysAvailable: number
    textColor: string
}

export interface ExamsResponse {
    exams: Exam[]
}

export const mockExamsResponse: ExamsResponse = {
    exams: [
        {
            id: 'linguagens-1',
            category: 'LINGUAGENS',
            title: '1º Simulado Enem de Linguagens',
            daysAvailable: 5,
            textColor: 'text-[#34238C]'
        },
        {
            id: 'matematica-1',
            category: 'MATEMÁTICA',
            title: '1º Simulado Enem de Matemática',
            daysAvailable: 5,
            textColor: 'text-[#2569C3]'
        },
        {
            id: 'natureza-1',
            category: 'NATUREZAS',
            title: '1º Simulado Enem Ciência da Natureza',
            daysAvailable: 5,
            textColor: 'text-[#24a31a]'
        },
        {
            id: 'natureza-2',
            category: 'NATUREZAS',
            title: '2º Simulado Enem Ciência da Natureza',
            daysAvailable: 5,
            textColor: 'text-[#24a31a]'
        }
    ]
}
