import { Link } from 'react-router-dom'
import { CirclePlus } from 'lucide-react'
import mathImage from '../../assets/math.svg'
import languageImage from '../../assets/language.svg'
import humanCienceImage from '../../assets/human-cience.svg'
import natureCienceImage from '../../assets/nature-cience.svg'
import Divider from '../Divider'

interface Subject {
    title: string
    image: string
    bgColor: string
    borderColor: string
    textColor: string
}

const ReviewSection = () => {
    const subjects: Subject[] = [
        {
            title: 'Matemática',
            image: mathImage,
            bgColor: 'bg-[linear-gradient(to_right,#ECF4FF,#fff)]',
            borderColor: 'border-neutral-400',
            textColor: 'text-[#2569C3]'
        },
        {
            title: 'Linguagens',
            image: languageImage,
            bgColor: 'bg-[linear-gradient(to_right,#F1EEFF,#fff)]',
            borderColor: 'border-neutral-400',
            textColor: 'text-[#34238C]'
        },
        {
            title: 'Ciências da Natureza',
            image: natureCienceImage,
            bgColor: 'bg-[linear-gradient(to_right,#DBFAE3,#fff)]',
            borderColor: 'border-neutral-400',
            textColor: 'text-[#24a31a]'

        },
        {
            title: 'Ciências Humanas',
            image: humanCienceImage,
            bgColor: 'bg-[linear-gradient(to_right,#FFF4D1,#fff)]',
            borderColor: 'border-neutral-400',
            textColor: 'text-[#967200]'
        }
    ]

    return (
        <>
            <div className="flex justify-between items-center mt-8">
                <h3 className="text-neutral-900 text-title-3">Área de Revisão</h3>
                <Link to="/revisoes" className="text-title-3 text-neutral-900 hover:underline flex items-center gap-2">
                    <span className="hidden sm:inline">+ Acessar todas as áreas de conhecimento</span>
                    <CirclePlus className="sm:hidden w-6 h-6" />
                </Link>
            </div>
            <Divider className="mt-4 mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {subjects.map((subject, index) => (
                    <div
                        key={index}
                        className={`${subject.bgColor} border ${subject.borderColor} rounded-2xl p-5 flex items-center justify-between gap-4 shadow-[0_5px_8px_0_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow cursor-pointer min-h-[140px] overflow-hidden`}
                    >
                        <div className="flex-1 min-w-0">
                            <h4 className={`text-title-2 ${subject.textColor} leading-tight`}>
                                {subject.title}
                            </h4>
                        </div>
                        <div className="flex-shrink-0 w-[100px] h-[100px] flex items-center justify-center">
                            <img
                                src={subject.image}
                                alt={subject.title}
                                className="max-w-[100px] max-h-[100px] w-auto h-auto object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ReviewSection

