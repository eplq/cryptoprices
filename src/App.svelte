<script lang="ts">
    import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
import CryptocurrenciesList from './CryptocurrenciesList.svelte';
</script>

<header>
    <TopAppBar variant="static">
        <Row>
            <Section>
                <Title>Precios de las criptomonedas</Title>
            </Section>
        </Row>
    </TopAppBar>
</header>

<main>
    <CryptocurrenciesList />
</main>

<style>
    main {
        margin-top: 2rem;
        margin-right: 3rem;
        margin-left: 3rem;

        display: flex;
        flex-flow: row nowrap;

        justify-content: center;
    }
</style>
