import type { Coin } from './types'

export async function getCoins() {
    let request = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=200&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d')
    let data: Array<Coin> = await request.json()
    return data;
}
