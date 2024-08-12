import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), '')
	return {
		plugins: [react(), tsconfigPaths()],
		define: {
			APP_ENV: {
				API_URL: env.API_URL,
				APP_URL: env.APP_URL,
				RECAPTCHA_SITE_KEY: env.RECAPTCHA_SITE_KEY,
			},
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		},
	}
})
