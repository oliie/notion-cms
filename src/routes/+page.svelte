<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="grid">
	{#each data.images as image}
		<div>
			<article>
				<img src={image.url} alt={image.title} />
				<footer>
					<hgroup>
						<h2>{image.title}</h2>
						<h3>{new Date(image.created).toDateString()}</h3>
					</hgroup>
				</footer>
			</article>
		</div>
	{/each}
</div>
