import type { PageServerLoad } from './$types'

export interface ListItem {
  name: string
  tally: number
}

export const load = (async () => {
  const list = fetch('https://advent.sveltesociety.dev/data/2023/day-one.json').then(
    (resp) => resp.json() as Promise<ListItem[]>
  )

  return {
    streaming: {
      list
    }
  }
}) satisfies PageServerLoad
