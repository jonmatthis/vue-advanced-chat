import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')
export default defineConfig({
	plugins: [
		vue({
			template: {
				compilerOptions: {
					isCustomElement: tagName => tagName === 'vue-advanced-chat'
				}
			}
		})
	],
	resolve: {
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	server: {
		open: '/'
	}
})
