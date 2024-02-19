<!-- layout.svelte -->

<script>
  import "../app.css";
	import Navbar from "./Navbar.svelte";
</script>

<div class="h-screen w-screen bg-black flex flex-col">
  <Navbar />
  <div class="bg-black text-white flex-1 p-8 px-[16vw] overflow-y-auto">
    <slot />
  </div>
</div>