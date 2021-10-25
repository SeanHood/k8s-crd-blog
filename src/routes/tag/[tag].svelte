<script context="module">
	export const hydrate = false;
	export async function load({ page, fetch }) {
		const res = await fetch(`/api/tags/${page.params.tag}`);
		const blog = await res.json();
		return {
			props: {
				posts: blog.items
			}
		};
	}
</script>

<script>
    import BlogPost from "../../Components/BlogPost.svelte"
    export let posts;
</script>

{#each posts as post}
    <BlogPost
		title={post.spec.title}
		body={post.spec.body}
		date={post.metadata.creationTimestamp}
		tags={post.metadata.labels}
		slug={post.metadata.name} />
{/each}