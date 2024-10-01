import { Microscope, Sun } from 'lucide-react'

export const Header = () => {
	return (
		<header id='header' className='flex justify-between p-2 md:p-4'>
			<div className='flex gap-2 items-center'>
				<Microscope />
				<span className=''>Hextractor</span>
			</div>
			<Sun />
		</header>
	)
}
