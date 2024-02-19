<!-- navbar.svelte -->

<script>
	import Plus from "$lib/icons/plus.svelte";

  let showMenu = false;

  function toggleNavbar() {
    showMenu = !showMenu;
  }
</script>

<div class="w-full">
	<button class="z-10 text-2xl fixed top-0 left-0 w-[8vw] h-[8vw] min-h-12 min-w-12 flex items-center justify-center" on:click={toggleNavbar}>
		<Plus size={10} showMenu={showMenu} />
  </button>

  <div class:active={showMenu} class="fixed top-0 left-0 w-screen h-screen backdrop-blur-3xl text-white flex flex-col p-16 containerClass justify-start items-center">
    <a href="/" class="text-[5rem] font-thin border-b-2 border-white w-full hover:font-bold transition-all duration-300 " on:click={toggleNavbar}>HOME</a>
    <a href="/about" class="text-[5rem] font-thin border-b-2 border-white w-full hover:font-bold duration-300" on:click={toggleNavbar}>ABOUT</a>
    <a href="/works" class="text-[5rem] font-thin border-b-2 border-white w-full hover:font-bold duration-300" on:click={toggleNavbar}>WORKS</a>
    <a href="/" class="text-[5rem] font-thin border-b-2 border-white w-full hover:font-bold duration-300" on:click={toggleNavbar}>CONTACT</a>
    <a href="/" class="text-[5rem] font-thin border-b-2 border-white w-full hover:font-bold duration-300" on:click={toggleNavbar}>RESUME</a>
  </div>
</div>

<style>
.containerClass {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top;
  transition: opacity 500ms, transform 500ms; 
  transition-timing-function: cubic-bezier(0.85, 0.3, 0.3, 0.9);
}

div.active {
  opacity: 1;
  transform: scaleY(1);
  transition-timing-function: cubic-bezier(0.85, 0.3, 0.3, 0.9);
}

</style>
