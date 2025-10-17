import Divider from '../Divider'
import LoadingSpinner from '../LoadingSpinner'
import ErrorMessage from '../ErrorMessage'
import { useExams } from '../../api/queries/useExams'

const ExamsSection = () => {
    const { data, isLoading, error, refetch } = useExams()
    const exams = data?.exams || []

    if (isLoading) {
        return (
            <>
                <div className="mt-8">
                    <h3 className="text-neutral-900 text-title-3">Simulados</h3>
                </div>
                <Divider className="mt-4 mb-8" />
                <LoadingSpinner className="py-8" />
            </>
        )
    }

    if (error) {
        return (
            <>
                <div className="mt-8">
                    <h3 className="text-neutral-900 text-title-3">Simulados</h3>
                </div>
                <Divider className="mt-4 mb-8" />
                <ErrorMessage error={error} onRetry={() => refetch()} />
            </>
        )
    }

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

