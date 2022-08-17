<script lang="ts">
    import CircularProgress from '@smui/circular-progress'

    import { getCoins } from './api';
    import CryptoDetail from './CryptoDetail.svelte';
</script>

{#await getCoins()}
    <CircularProgress style="height: 32px; width: 32px;" indeterminate />
{:then coins}
    <div class="list">
        {#each coins as coin}
            <CryptoDetail {coin} />
        {/each}
    </div>
{/await}

<style>
    div {
        width: 80%;
    }
</style>
