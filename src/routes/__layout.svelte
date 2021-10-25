<script context="module">
	export const hydrate = true;
	export async function load({ fetch }) {
		const res = await fetch(`/config.json`);
		const config = await res.json();
		return {
			props: {
				spec: config.spec
			}
		};
	}
</script>

<script>
    import '../app.css'

    export let spec;
</script>

<main style=" --main-colour: {spec.colour}">
<h1><a href="/">{spec.title}</a></h1>

    <slot></slot>
</main>

<style>

    main {
        max-width: 800px;
        margin: 0 auto;
    }

    :global(a) {
        color: var(--main-colour);
    }

</style>