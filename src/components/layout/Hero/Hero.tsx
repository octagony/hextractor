import { IHeroProps } from './IHero'

export const Hero = ({ children, className }: IHeroProps) => {
	return (
		<div
			className={`grid place-items-center w-full h-full mt-4 border-2 border-gray-400 dark:border-gray-100 p-4 ${className}`}
		>
			<h2 className='font-bold text-2xl md:text-3xl lg:text-4xl'>
				Start by uploading an image
			</h2>
			<div className='mt-4'>{children}</div>
		</div>
	)
}
