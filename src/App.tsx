import { Container } from '@/components/site/Container/Container'
import { useState } from 'react'

function App() {
	const [count, setCount] = useState(0)

	return (
		<Container>
			<h1>Container test</h1>
		</Container>
	)
}

export default App
