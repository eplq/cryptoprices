
import { getCoins } from '../src/api'

test('testing api', async () => {
    let coins = await getCoins()

    expect(coins.length).toBe(3)
    expect(coins[0].id).toBe("bitcoin")
    expect(coins[1].id).toBe("ethereum")
    expect(coins[2].id).toBe("tether")
    
    expect(false).toBeTruthy()
})
