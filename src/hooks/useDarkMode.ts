import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
	const [isDarkMode, setDarkMode] = useLocalStorage('darkMode', false)

	useEffect(() => {
		document.body.classList.toggle('dark', isDarkMode)
	}, [isDarkMode])

	return [isDarkMode, setDarkMode]
}

export default useDarkMode
