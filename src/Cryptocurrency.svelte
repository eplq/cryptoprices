<script lang="ts">
    import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
    import type { Coin } from "./types";

    export let coin: Coin;
</script>

<Accordion>
    <Panel>
        <Header style="padding: 0;">
            <div class="header-div">
                <h2>{coin.name}</h2>
                <span>{coin.current_price} &euro;</span>
            </div>
        </Header>
        <Content>
            <table class="info-table">
                <tr>
                    <th>24h</th>
                    <td
                        class:red={coin.price_change_percentage_24h < 0}
                        class:green={coin.price_change_percentage_24h > 0}
                        >{coin.price_change_percentage_24h.toFixed(2)} % ({coin.price_change_24h.toFixed(2)} &euro;)
                    </td>
                </tr>
                <tr>
                    <th>Circulating supply</th>
                    <td>
                        {coin.circulating_supply} {coin.symbol.toUpperCase()}
                    </td>
                </tr>
                <tr>
                    <th>Max supply</th>
                    <td>
                        {coin.max_supply ?? "Infinite"} {coin.symbol.toUpperCase()}
                    </td>
                </tr>
                <tr>
                    <th>Market Cap</th>
                    <td>
                        {coin.market_cap.toLocaleString("es-ES")} &euro;
                    </td>
                </tr>
            </table>
        </Content>
    </Panel>
</Accordion>

<style>
    .header-div {
        display: flex;
        justify-content: space-between;
    }

    .header-div h2 {
        font-size: max(min(1.5rem, 2vmax), 1rem);
        max-width: 50%;

        overflow-x: hidden;
        text-overflow: ellipsis;
    }

    .info-table {
        width: 100%;
    }

    .info-table td {
        font-size: max(min(2vmin, 1rem), .8rem);
    }

    .red {
        color: red;
    }

    .green {
        color: green;
    }
</style>
