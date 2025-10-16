import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

const ReviewHeader = () => {
    return (
        <div className="bg-primary relative">
            <div className="px-14 py-8">
                <Link
                    to="/"
                    className="flex items-center gap-2 text-white text-button-p font-semibold mb-4 hover:underline"
                >
                    <ChevronLeft className="w-4 h-4" />
                    Voltar para a tela inicial
                </Link>
                <h1 className="text-title-2 text-white font-bold">
                    Revisões por área do conhecimento
                </h1>
            </div>
        </div>
    )
}

export default ReviewHeader

