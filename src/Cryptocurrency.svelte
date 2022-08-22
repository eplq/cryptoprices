<script lang="ts">
    import Accordion, { Panel, Header, Content } from '@smui-extra/accordion'
    import type { Coin } from './types'

    export let coin: Coin
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
            {coin.current_price}
        </Content>
    </Panel>
</Accordion>

<style>
    .header-div {
        display: flex;
        justify-content: space-between;
    }

    .header-div h2 {
        font-size: max(min(1.5rem, 2vmax), .8rem);
        max-width: 50%;
        
        overflow-x: hidden;
        text-overflow: ellipsis;
    }
</style>