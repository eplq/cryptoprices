<script lang="ts">
    import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar'
    import CryptocurrenciesList from './CryptocurrenciesList.svelte'
</script>

<TopAppBar variant="static">
    <Row>
        <Section>
            <Title>Precios de las criptomonedas</Title>
        </Section>
    </Row>
</TopAppBar>

<main>
    <CryptocurrenciesList />
</main>

<style>
    main {
        margin: 2rem 1rem;

        display: flex;
        flex-flow: row nowrap;

        justify-content: center;
    }
</style>
