import { rest } from 'msw'

export const handlers = [
    rest.get('https://api.coingecko.com/api/v3/coins/markets', // ?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d
    (_req, res, ctx) => {
        return res(
            ctx.json([
                {
                    "id": "bitcoin",
                    "symbol": "btc",
                    "name": "Bitcoin",
                    "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
                    "current_price": 23835,
                    "market_cap": 455866391297,
                    "market_cap_rank": 1,
                    "fully_diluted_valuation": 500671927385,
                    "total_volume": 22341843333,
                    "high_24h": 24246,
                    "low_24h": 23501,
                    "price_change_24h": 231.41,
                    "price_change_percentage_24h": 0.98041,
                    "market_cap_change_24h": 4465152145,
                    "market_cap_change_percentage_24h": 0.98918,
                    "circulating_supply": 19120693,
                    "total_supply": 21000000,
                    "max_supply": 21000000,
                    "ath": 59717,
                    "ath_change_percentage": -60.04995,
                    "ath_date": "2021-11-10T14:24:11.849Z",
                    "atl": 51.3,
                    "atl_change_percentage": 46406.12409,
                    "atl_date": "2013-07-05T00:00:00.000Z",
                    "roi": null,
                    "last_updated": "2022-08-13T19:21:28.913Z"
                },
                {
                    "id": "ethereum",
                    "symbol": "eth",
                    "name": "Ethereum",
                    "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
                    "current_price": 1933.1,
                    "market_cap": 232192583035,
                    "market_cap_rank": 2,
                    "fully_diluted_valuation": null,
                    "total_volume": 15625485989,
                    "high_24h": 1966.09,
                    "low_24h": 1873.58,
                    "price_change_24h": 58.36,
                    "price_change_percentage_24h": 3.11289,
                    "market_cap_change_24h": 7157537781,
                    "market_cap_change_percentage_24h": 3.18063,
                    "circulating_supply": 120082677.446493,
                    "total_supply": 120082677.446493,
                    "max_supply": null,
                    "ath": 4228.93,
                    "ath_change_percentage": -54.27672,
                    "ath_date": "2021-12-01T08:38:24.623Z",
                    "atl": 0.381455,
                    "atl_change_percentage": 506802.20319,
                    "atl_date": "2015-10-20T00:00:00.000Z",
                    "roi": {
                        "times": 107.39373786354413,
                        "currency": "btc",
                        "percentage": 10739.373786354414
                    },
                    "last_updated": "2022-08-13T19:20:50.781Z"
                },
                {
                    "id": "tether",
                    "symbol": "usdt",
                    "name": "Tether",
                    "image": "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png",
                    "current_price": 0.974669,
                    "market_cap": 65374417510,
                    "market_cap_rank": 3,
                    "fully_diluted_valuation": null,
                    "total_volume": 44258457213,
                    "high_24h": 0.978586,
                    "low_24h": 0.971374,
                    "price_change_24h": 0.00000637,
                    "price_change_percentage_24h": 0.00065,
                    "market_cap_change_24h": 149165604,
                    "market_cap_change_percentage_24h": 0.22869,
                    "circulating_supply": 67037962684.992,
                    "total_supply": 67037962684.992,
                    "max_supply": null,
                    "ath": 1.13,
                    "ath_change_percentage": -13.82244,
                    "ath_date": "2018-07-24T00:00:00.000Z",
                    "atl": 0.533096,
                    "atl_change_percentage": 82.92873,
                    "atl_date": "2015-03-02T00:00:00.000Z",
                    "roi": null,
                    "last_updated": "2022-08-13T19:20:51.749Z"
                }
              ])
        )
    })
]