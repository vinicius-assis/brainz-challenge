import bigBrainLogo from '../../assets/big-brain.png'
import microsoftLogo from '../../assets/microsoft.png'

const Footer = () => {
    return (
        <footer className="bg-white border-t border-neutral-400 py-6 pr-28 text-right mt-20">
            <div className="flex items-baseline justify-end gap-4">
                <p className="text-button-p">
                    <span className="text-neutral-900">Powered by </span>
                    <span className="text-[#3DBEFF]">Big Brain</span>
                </p>
                <div className="flex items-baseline gap-3">
                    <img src={bigBrainLogo} alt="Big Brain" className="w-[26px] h-[25px]" />
                    <img src={microsoftLogo} alt="Microsoft" className="w-[51px] h-[11px]" />
                </div>
            </div>
        </footer>
    )
}

export default Footer

