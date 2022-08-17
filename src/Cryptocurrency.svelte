<script lang="ts">
    import Accordion, { Panel, Header, Content } from '@smui-extra/accordion'
    import type { Coin } from './types';

    export let coin: Coin;
</script>

<Accordion>
    <Panel>
        <Header>
            <h2>{coin.name}</h2>
        </Header>
        <Content>
            {coin.current_price}
        </Content>
    </Panel>
</Accordion>
