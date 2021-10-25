<script>

    export let title;
    export let body;
    export let date;

    import SvelteMarkdown from 'svelte-markdown'

</script>


<style>
    .post {
        background: #ffffff;
        margin: 2em 0 0;
        padding: 0 0 2em 0;
        display: block;
        border-bottom: 1px solid #ddd;
    }

    :global(pre) {
        background: #eee;
        padding: 1.5em;
    }

    .date {
        font-size: 0.9em;
    }

</style>

<section class="post">

    <h2>{title}</h2>
    {#if date}<span class="date">Posted: {date}</span>{/if}

    <SvelteMarkdown source={body} />

</section>