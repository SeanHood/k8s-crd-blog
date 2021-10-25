<script context="module">
	export const hydrate = false;
	export async function load({ page, fetch  }) {
		const res = await fetch(`/api/blogpost/${page.params.name}`);
		const blog = await res.json();
		return {
			props: {
				post: blog
			}
		};
	}
</script>

<script>
    import BlogPost from "../../Components/BlogPost.svelte"
    export let post;
</script>



<BlogPost
	title={post.spec.title}
	body={post.spec.body}
	date={post.metadata.creationTimestamp}
	tags={post.metadata.labels}
	slug={post.metadata.name} />