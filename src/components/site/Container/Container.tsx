import { IContainerProps } from './IContainer'

export const Container = ({ children, className }: IContainerProps) => {
	return (
		<div
			className={`font-inter h-screen shadow-xl w-full text-lg md:text-xl lg:text-2xl dark:bg-black dark:text-gray-50 ${className}`}
		>
			<div className='container mx-auto p-4'>{children}</div>
		</div>
	)
}
