import { Container } from '@/components/layout/Container/Container'
import { Header } from './components/layout/Header/Header'
import { Hero } from './components/layout/Hero/Hero'
import { ImageUploader } from './components/site/ImageUploader/ImageUploader'

function App() {
	return (
		<Container>
			<>
				<Header />
				<Hero>
					<ImageUploader />
				</Hero>
			</>
		</Container>
	)
}

export default App
