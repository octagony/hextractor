import useDarkMode from '@/hooks/useDarkMode'
import { Microscope, Moon, Sun } from 'lucide-react'

export const Header = () => {
	const [isDarkMode, setDarkMode] = useDarkMode()

	const toggleDarkMode = () => {
		return isDarkMode ? setDarkMode(false) : setDarkMode(true)
	}

	return (
		<header id='header' className='flex justify-between p-2 md:p-4'>
			<div className='flex gap-2 items-center'>
				<Microscope />
				<span>Hextractor</span>
			</div>
			<div onClick={toggleDarkMode}>{isDarkMode ? <Moon /> : <Sun />}</div>
		</header>
	)
}
