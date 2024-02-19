<!-- plus.svelte -->

<script>
    export let size = 24;
    export let showMenu = false;
</script>

<svg class:active={showMenu} xmlns="http://www.w3.org/2000/svg" width={`${size}vw`} height={`${size}vw`} viewBox="0 0 129 129" fill="none" class="min-h-12 min-w-12">
    <path d="M64.5 32.25V96.75" stroke="#F4F3EA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M32.25 64.5H96.75" stroke="#F4F3EA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


<style>
    .active {
        transform: rotate(135deg);
        transition: transform 500ms;
        transition-timing-function: cubic-bezier(0.85, 0.3, 0.3, 0.9);
    }

    :not(.active) {
        transition: transform 500ms;
        transition-timing-function: cubic-bezier(0.85, 0.3, 0.3, 0.9);
    }
</style>
