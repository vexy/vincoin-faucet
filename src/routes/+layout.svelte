<script>
    // /** @type {import('./$types').LayoutData} */
    // export let data;
</script>

<page-container>
    <h1>Welcome to Vincoin faucet</h1>

    <section>
        <slot />
    </section>

    <p>Here you can get <code>VINCOIN</code> coins by entering your wallet address below</p>
</page-container>


<style>
    page-container {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    page-container section {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h1 {
        margin: 0;
        font-size: 3em;
        text-align: center;
    }
</style>