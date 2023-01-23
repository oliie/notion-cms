<script>
  import '@picocss/pico/css/pico.min.css';
</script>

<div class="app">
  <main class="container">
    <h1><span class=" rainbow_text_animated">Cats</span> from a Notion CMS</h1>
    <slot />
  </main>
</div>

<style>
  h1 {
    text-align: center;
    margin: 24px 0 0 0;
  }

  .rainbow_text_animated {
    background: linear-gradient(to right, #6666ff, #0099ff, #00ff00, #ff3399, #6666ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: rainbow_animation 2s ease-in-out infinite;
    background-size: 400% 100%;
  }

  @keyframes rainbow_animation {
    0%,
    100% {
      background-position: 0 0;
    }

    50% {
      background-position: 100% 0;
    }
  }
</style>
