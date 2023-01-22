<script>
	import '@picocss/pico/css/pico.min.css';
</script>

<div class="app">
	<main class="container">
		<h1>Cats from a Notion CMS</h1>
		<slot />
	</main>
</div>

<style>
	h1 {
		text-align: center;
		margin: 24px 0 0 0;
	}
</style>
