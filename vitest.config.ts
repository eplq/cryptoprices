import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
    plugins: [svelte({hot: !process.env.VITEST})],
    test: {
        include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        globals: true,
        environment: 'jsdom',
        setupFiles: './tests/setupTests.ts',
        deps: {
            inline: [
                "msw", // temporary workaround because msw and whatwg-fetch are commonjs and not esm
                "whatwg-fetch"
            ]
        },
        coverage: {
            reporter: ['text', 'json', 'html']
        }
    },
})
