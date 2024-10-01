import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { IImageUploaderState } from './IImageUploader'

export const ImageUploader = () => {
	const [fileInfo, setFileInfo] = useState<IImageUploaderState>({
		file: null,
		filePreview: '',
	})

	const setImage = (event: React.FormEvent) => {
		const files = (event.target as HTMLInputElement).files

		if (!files?.length) {
			setFileInfo(prev => ({
				...prev,
				file: null,
				filePreview: '',
			}))

			return
		}

		setFileInfo(prev => ({
			...prev,
			file: files[0],
			filePreview: URL.createObjectURL(files[0]),
		}))
	}

	useEffect(() => {
		if (!fileInfo.file) {
			return
		}
	}, [fileInfo])

	return (
		<div className='grid w-full max-w-sm items-center gap-1.5'>
			<Input
				id='picture'
				type='file'
				onChange={setImage}
				accept='image/png, image/jpeg, image/png'
			/>
			<img src={fileInfo.filePreview}></img>
		</div>
	)
}
