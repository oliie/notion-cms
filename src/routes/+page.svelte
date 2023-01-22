<script lang="ts">
  import type { PageServerData } from './$types';

  export let data: PageServerData;
</script>

<svelte:head>
  <title>Notion CMS</title>
  <meta name="description" content="Images of cats from a Notion CMS Database" />
</svelte:head>

<div class="grid">
  {#each data.images as image}
    <div>
      <article>
        <img src={image.url} alt={image.title} height="250" width="250" />
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

<style>
  img {
    border-radius: 8px;
    transition: transform 300ms cubic-bezier(0.175, 0.885, 0.32, 2.275);
  }

  img:hover {
    transform: scale(1.1);
  }
</style>
