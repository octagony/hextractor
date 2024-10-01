import { IContainerProps } from './IContainer'

export const Container = ({ children, className }: IContainerProps) => {
	return <div className={`container mx-auto p-4 ${className}`}>{children}</div>
}
