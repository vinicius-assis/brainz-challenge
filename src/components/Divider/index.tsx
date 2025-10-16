interface DividerProps {
    className?: string
}
const Divider = ({ className = '' }: DividerProps) => {

    return (
        <div className={`h-[1px] w-full bg-neutral-400 ${className}`} />
    )
}

export default Divider