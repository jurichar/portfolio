<!-- item.svelte -->

<script>
	import Plus from "$lib/icons/plus.svelte";

  let isExpanded = false;

  function toggleExpand() {
    isExpanded = !isExpanded;
  }
</script>

<div class="flex flex-col border border-slate-100 ">
  <div class="flex flex-row justify-between">
    <h1>
      Item
    </h1>
    <button class:active={isExpanded} on:click={toggleExpand} class="flex justify-center items-center">
      <Plus />
    </button>
  </div>
  <div class:active={isExpanded} class="containerClass">
    <div>
      <p>
        This is an item
      </p>
    </div>
  </div>
</div>

<style>
.containerClass {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 500ms;
}

.containerClass > div {
  overflow: hidden;
}

div.active {
  grid-template-rows: 1fr;
}

button.active {
  transform: rotate(-180deg);
  transition: transform 500ms;
}

button:not(.active) {
  transition: transform 500ms;
}

</style>
