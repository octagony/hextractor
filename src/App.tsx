import { Container } from '@/components/site/Container/Container'
import { useState } from 'react'
import { Header } from './components/site/Header/Header'

function App() {
	const [count, setCount] = useState(0)

	return (
		<Container>
			<Header />
		</Container>
	)
}

export default App
