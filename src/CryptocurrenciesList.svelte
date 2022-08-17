<script lang="ts">
    import CircularProgress from '@smui/circular-progress'

    import { getCoins } from './api'
    import Cryptocurrency from './Cryptocurrency.svelte'
</script>

{#await getCoins()}
    <CircularProgress style="height: 32px; width: 32px;" indeterminate />
{:then coins}
    <div class="list">
        {#each coins as coin}
            <Cryptocurrency {coin} />
        {/each}
    </div>
{/await}

<style>
    div {
        width: 80%;
    }
</style>
