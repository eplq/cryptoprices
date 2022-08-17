
import { render, screen } from '@testing-library/svelte'
import App from "../../src/App.svelte"

test('header is present', () => {
    render(App)
    const title = screen.getByText('Precios de las criptomonedas')
    expect(title).toBeInTheDocument()
})
