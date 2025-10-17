import heroImage from '../../assets/hero.svg'
import Divider from '../Divider'

const PromoBanner = () => {
    return (
        <>
            <h3 className="text-neutral-900 text-title-3 mt-5">Plano de Estudos</h3>
            <Divider className="mt-4 mb-8" />
            <div className="bg-secondary-50 border border-secondary-100 rounded-2xl py-6 px-6 lg:py-10 lg:pr-12 lg:pl-28 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
                <div className="flex-shrink-0 order-1 lg:order-1">
                    <img
                        src={heroImage}
                        alt="Ilustração de estudantes"
                        className="w-24 h-24 lg:w-32 lg:h-32 object-contain mx-auto lg:mx-0"
                    />
                </div>

                <div className="flex-1 order-2 lg:order-2 text-center lg:text-left">
                    <h2 className="text-primary text-title-2 lg:text-title-1 mb-2">
                        Faltam apenas 89 dias para o Enem
                    </h2>
                    <p className="text-neutral-900 text-body mb-4">
                        Seu jeito! Seu ritmo! O plano de estudos perfeito para a sua aprovação no ENEM.
                    </p>
                </div>

                <div className="flex-shrink-0 order-3 lg:order-3">
                    <button className="cursor-pointer bg-primary hover:bg-primary-200 text-neutral-100 text-button px-6 py-2 rounded-lg transition-colors whitespace-nowrap w-full lg:w-auto">
                        Acessar o meu plano de estudos
                    </button>
                </div>
            </div>
        </>
    )
}

export default PromoBanner

