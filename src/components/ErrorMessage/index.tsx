interface ErrorMessageProps {
    error?: Error | null
    className?: string
    onRetry?: () => void
}

const ErrorMessage = ({ error, className = '', onRetry }: ErrorMessageProps) => {
    return (
        <div className={`flex flex-col items-center justify-center p-8 text-center ${className}`}>
            <div className="text-red-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Erro ao carregar dados
            </h3>
            <p className="text-gray-600 mb-4">
                {error?.message || 'Algo deu errado. Tente novamente.'}
            </p>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-200 transition-colors"
                >
                    Tentar novamente
                </button>
            )}
        </div>
    )
}

export default ErrorMessage
