import heroImage from '../../assets/hero.svg'
import Divider from '../Divider'

const PromoBanner = () => {
    return (
        <>
            <h3 className="text-neutral-900 text-title-3 mt-5">Plano de Estudos</h3>
            <Divider className="mt-4 mb-8" />
            <div className="bg-secondary-50 border border-secondary-100 rounded-2xl py-10 pr-12 pl-28 flex items-center gap-8">
                <div className="flex-shrink-0">
                    <img
                        src={heroImage}
                        alt="Ilustração de estudantes"
                        className="w-32 h-32 object-contain"
                    />
                </div>

                <div className="flex-1">
                    <h2 className="text-primary text-title-1 mb-2">
                        Faltam apenas 89 dias para o Enem
                    </h2>
                    <p className="text-neutral-900 text-body mb-4">
                        Seu jeito! Seu ritmo! O plano de estudos perfeito para a sua aprovação no ENEM.
                    </p>
                </div>

                <div className="flex-shrink-0">
                    <button className="cursor-pointer bg-primary hover:bg-primary-200 text-neutral-100 text-button px-6 py-2 rounded-lg transition-colors whitespace-nowrap">
                        Acessar o meu plano de estudos
                    </button>
                </div>
            </div>
        </>
    )
}

export default PromoBanner

