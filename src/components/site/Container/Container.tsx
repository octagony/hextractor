import { IContainerProps } from './IContainer'

export const Container = ({ children, className }: IContainerProps) => {
	return (
		<div
			className={`container font-inter h-screen shadow-xl rounded-xl mx-auto p-4 m-4 text-lg md:text-xl lg:text-2xl ${className}`}
		>
			{children}
		</div>
	)
}
