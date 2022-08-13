import '@testing-library/jest-dom'

import {render, screen} from '@testing-library/svelte'

import App from './App.svelte'

test('probando el testing de svelte', () => {
    render(App)
    const title = screen.getByText('Init')
    expect(title).toBeInTheDocument()
})