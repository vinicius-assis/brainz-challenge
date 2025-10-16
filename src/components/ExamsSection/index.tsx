import Divider from '../Divider'

interface Exam {
    category: string
    title: string
    daysAvailable: number
    textColor: string
}

const ExamsSection = () => {
    const exams: Exam[] = [
        {
            category: 'LINGUAGENS',
            title: '1º Simulado Enem de Linguagens',
            daysAvailable: 5,
            textColor: 'text-[#34238C]'
        },
        {
            category: 'MATEMÁTICA',
            title: '1º Simulado Enem de Matemática',
            daysAvailable: 5,
            textColor: 'text-[#2569C3]'
        },
        {
            category: 'NATUREZAS',
            title: '1º Simulado Enem Ciência da Natureza',
            daysAvailable: 5,
            textColor: 'text-[#24a31a]'
        },
        {
            category: 'NATUREZAS',
            title: '2º Simulado Enem Ciência da Natureza',
            daysAvailable: 5,
            textColor: 'text-[#24a31a]'
        }
    ]

    return (
        <>
            <div className="mt-8">
                <h3 className="text-neutral-900 text-title-3">Simulados</h3>
            </div>
            <Divider className="mt-4 mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {exams.map((exam, index) => (
                    <div
                        key={index}
                        className="bg-white border border-neutral-400 rounded-2xl p-4 flex flex-col shadow-[0_5px_8px_0_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow cursor-pointer"
                    >
                        <div className="flex flex-col gap-4">
                            <span className={`${exam.textColor} text-support-p font-bold`}>
                                {exam.category}
                            </span>
                            <h4 className="text-title-3 text-neutral-900">
                                {exam.title}
                            </h4>
                            <p className="text-neutral-600 text-support">
                                Disponível há {exam.daysAvailable} dias
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ExamsSection

