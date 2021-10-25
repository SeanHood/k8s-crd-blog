<script context="module">
	export const hydrate = false;
	export async function load({ fetch }) {
		const res = await fetch(`/api/blogposts`);
		const blog = await res.json();
		return {
			props: {
				posts: blog.items
			}
		};
	}
</script>

<script>
    import BlogPost from "../Components/BlogPost.svelte"
    export let posts;
</script>

<h1>Welcome to my Kubernetes Blog</h1>


{#each posts as post}
    <BlogPost
		title={post.spec.title}
		body={post.spec.body}
		date={post.metadata.creationTimestamp}
		tags={post.metadata.labels} />
{/each}