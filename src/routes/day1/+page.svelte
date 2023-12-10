<script lang="ts">
  import type { ListItem } from './+page.server.js'

  const { data } = $props()

  let name = $state('')
  let tally = $state(0)
  let localList: ListItem[] = $state([])

  function add() {
    localList.push({
      name,
      tally
    })
    localList = localList
    name = ''
    tally = 0
  }
</script>

<table class="bg-secondary border border-accent border-separate rounded-xl">
  <thead>
    <tr class="text-primary border-b border-accent">
      <th class="w-40 text-left">Name</th>
      <th class="w-20">Tally</th>
      <th class="w-10 text-right"></th>
    </tr>
  </thead>
  <tbody>
    {#await data.streaming.list}
      <tr>
        <td colspan="3">Loading...</td>
      </tr>
    {:then list}
      {#each list as { name, tally }}
        <tr>
          <td>{name}</td>
          <td class="text-center">{tally}</td>
          <td class="text-right">{tally > 0 ? '🎁' : '💣'}</td>
        </tr>
      {/each}

      {#each localList as { name, tally }}
        <tr>
          <td>{name}</td>
          <td class="text-center">{tally}</td>
          <td class="text-right">{tally > 0 ? '🎁' : '💣'}</td>
        </tr>
      {/each}

      <tr>
        <td><input class="w-40" name="name" bind:value={name} type="text" /></td>
        <td><input class="w-20" name="tally" bind:value={tally} type="number" /></td>
        <td><input class="!bg-accent" type="submit" onclick={add} /></td>
      </tr>
    {/await}
  </tbody>
</table>

<style lang="postcss">
  th,
  td {
    @apply p-2;
  }

  input {
    @apply bg-background/50 rounded-sm p-2;
  }
</style>
