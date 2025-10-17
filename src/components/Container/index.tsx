import { type ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode
    className?: string
}

const Container = ({ children, className = '' }: ContainerProps) => {
    return (
        <div className={`h-full px-14 ${className}`}>
            {children}
        </div>
    )
}

export default Container

