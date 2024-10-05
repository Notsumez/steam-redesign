import { ReactNode } from "react"
import { twMerge } from 'tailwind-merge'

interface GridContainerProps {
    children?: ReactNode,
    className?: string; 
}

export function GridHeader({children, className}: GridContainerProps) {
    const defaultClass = "flex gap-3 items-center mt-3 ml-7"
    const combinedClasses = twMerge(defaultClass, className)
    return (
        <div className={combinedClasses}>
            {children}
        </div>
    )
}