import profileImage from '../../assets/profile.png'

const ProfileCard = () => {
    return (
        <div className="bg-neutral-100 border-1 border-neutral-400 rounded-2xl p-10 -mt-16">
            <div className="flex items-center gap-4 mb-6">
                <img
                    src={profileImage}
                    alt="Profile"
                    className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                    <p className="text-neutral-700 text-support">Boas-vindas</p>
                    <h3 className="text-neutral-900 text-title-3">José de Abreu</h3>
                </div>
            </div>

            <div className="max-w-2xl">
                <h2 className="text-primary text-title-1 mb-4">
                    Vamos ativar o seu painel de desempenho?
                </h2>

                <p className="text-neutral-900 text-body mb-4">
                    Acesse agora o seu plano de estudos personalizado e comece a estudar do seu jeito.
                </p>

                <p className="text-neutral-900 text-body mb-6">
                    À medida que você avança, este painel será preenchido com seus dados de
                    desempenho, tempo de estudo, progresso por área e muito mais!
                </p>

                <button className="cursor-pointer bg-primary hover:bg-primary-200 text-neutral-100 text-button px-6 py-2 rounded-lg transition-colors">
                    Acessar o meu plano de estudos
                </button>
            </div>
        </div>
    )
}

export default ProfileCard