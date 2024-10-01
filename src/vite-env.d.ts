/// <reference types="vite/client" />
interface ImportMetaEnv {
	readonly VITE_API_KEY: string
	readonly VITE_API_SECRET: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
