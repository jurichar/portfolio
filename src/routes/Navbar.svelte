<!-- navbar.svelte -->

<script>
  let showMenu = false;

  function toggleNavbar() {
    showMenu = !showMenu;
  }
</script>

<div class="w-full">
  <button class="z-10 text-2xl font-bold text-white fixed top-8 left-8" on:click={toggleNavbar}>X</button>
  <div class:active={showMenu} class="fixed top-0 left-0 w-screen h-screen backdrop-blur-3xl text-white flex flex-col p-16 containerClass">
    <a href="/" class="text-2xl font-bold" on:click={toggleNavbar}>Home</a>
    <a href="/about" class="text-2xl font-bold" on:click={toggleNavbar}>About</a>
    <a href="/works" class="text-2xl font-bold" on:click={toggleNavbar}>Works</a>
  </div>
</div>

<style>
.containerClass {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top;
  transition: opacity 500ms, transform 500ms;
}

.active {
  opacity: 1;
  transform: scaleY(1);
}
</style>
