import { useState } from 'react'
import { Button } from './components/ui/button'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Button>Test shadcn</Button>
		</>
	)
}

export default App
