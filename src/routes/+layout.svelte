<!-- layout.svelte -->

<script>
  import "../app.css";
	import Navbar from "./Navbar.svelte";
</script>

<div class="h-screen w-screen bg-black">
  <Navbar />
  <div class="bg-black text-white w-full h-full p-16">
    <slot />
  </div>
</div>
