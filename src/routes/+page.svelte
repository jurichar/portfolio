<!-- page.svelte -->

<script>
	import ProjectMajor from "./Project_major.svelte";
</script>

<div class="w-full flex justify-center items-center flex-col">
  <div class="flex flex-row">
    <img src="https://picsum.photos/200/200" alt="random image" class="rounded" aria-hidden="true"/>
    <div class="flex flex-col">
      <h1 class="text-3xl font-bold underline">
        Hi, 
        <br>
        I'm a Julien Richard
      </h1>
      <p>
        and I'm a web developer    
      </p>
    </div>
  </div>
  <ProjectMajor />
  <ProjectMajor />
  <ProjectMajor />
</div>