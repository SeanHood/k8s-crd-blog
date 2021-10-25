<script>

    export let title;
    export let body;
    export let date;
    export let tags = {};

    let tag_keys = Object.keys(tags)

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

    .meta {
        font-size: 0.9em;
    }
    .tag {
        background: #ccc;
        padding: 5px;
        margin: 5px;
        font-family: monospace;
    }

</style>

<section class="post">

    <h2>{title}</h2>
    <span class="meta">
    {#if date}<span class="date">Posted: {date}</span>{/if}
    {#each tag_keys as tag}
        <span class="tag">#{tag}</span>
    {/each}
    </span>

    <SvelteMarkdown source={body} />

</section>