import mathImage from '../assets/math.svg'
import languageImage from '../assets/language.svg'
import humanCienceImage from '../assets/human-cience.svg'
import natureCienceImage from '../assets/nature-cience.svg'

export interface Subject {
    id: string
    title: string
    image: string
    bgColor: string
    borderColor: string
    textColor: string
}

export interface ReviewSubjectsResponse {
    subjects: Subject[]
}

export const mockReviewSubjectsResponse: ReviewSubjectsResponse = {
    subjects: [
        {
            id: 'matematica',
            title: 'Matemática',
            image: mathImage,
            bgColor: 'bg-[linear-gradient(to_right,#ECF4FF,#fff)]',
            borderColor: 'border-neutral-400',
            textColor: 'text-[#2569C3]'
        },
        {
            id: 'linguagens',
            title: 'Linguagens',
            image: languageImage,
            bgColor: 'bg-[linear-gradient(to_right,#F1EEFF,#fff)]',
            borderColor: 'border-neutral-400',
            textColor: 'text-[#34238C]'
        },
        {
            id: 'natureza',
            title: 'Ciências da Natureza',
            image: natureCienceImage,
            bgColor: 'bg-[linear-gradient(to_right,#DBFAE3,#fff)]',
            borderColor: 'border-neutral-400',
            textColor: 'text-[#24a31a]'
        },
        {
            id: 'humanas',
            title: 'Ciências Humanas',
            image: humanCienceImage,
            bgColor: 'bg-[linear-gradient(to_right,#FFF4D1,#fff)]',
            borderColor: 'border-neutral-400',
            textColor: 'text-[#967200]'
        }
    ]
}
