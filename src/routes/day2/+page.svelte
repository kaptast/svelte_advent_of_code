<script lang="ts">
  let cookiesMunched = $state(0)

  const happinessIndicator = $derived(() => {
    switch (true) {
    }
  })
</script>

<div class="flex flex-wrap w-full text-text">
  {#if cookiesMunched > 2}
    {#each Array(cookiesMunched - 2) as _, index (index)}
      <div class="w-20 h-20 text-9xl pointer-events-none select-none">🍪</div>
    {/each}
  {/if}

  {#if cookiesMunched > 1}
    <button
      onclick={() => cookiesMunched--}
      class="w-20 h-20 text-9xl relative hover:opacity-70 transition-all"
    >
      <div class="absolute text-7xl top-16 left-[85px] -translate-x-1/2 -translate-y-1/2">-</div>
      <span class="pointer-events-none select-none"> 🍪 </span>
    </button>
  {/if}

  {#if cookiesMunched > 0}
    <div class="w-20 h-20 text-9xl relative">
      <div class="absolute text-5xl top-16 left-[85px] -translate-x-1/2 -translate-y-1/2">
        {cookiesMunched}
      </div>
      <span class="pointer-events-none select-none"> 🍪 </span>
    </div>
  {/if}

  <button onclick={() => cookiesMunched++} class="w-20 h-20 text-9xl relative group">
    <div class="absolute text-7xl top-16 left-[85px] -translate-x-1/2 -translate-y-1/2">+</div>
    <span class="pointer-events-none select-none opacity-0 group-hover:opacity-70 transition-all">
      🍪
    </span>
  </button>
</div>

<div class="absolute left-5 bottom-5 flex items-center">
  <button class="p-2 bg-accent rounded" onclick={() => (cookiesMunched = 0)}> Reset </button>

  <span class="ml-5 text-7xl inline-flex items-center">
    🎅 <span class="text-4xl">is</span>

    {#if cookiesMunched < 5}
      😒
    {:else if cookiesMunched < 30}
      😐
    {:else if cookiesMunched < 60}
      🙂
    {:else}
      🥰
    {/if}
  </span>
</div>
