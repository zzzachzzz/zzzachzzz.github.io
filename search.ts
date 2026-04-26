// search.ts (client-side)
import { autocomplete } from '@algolia/autocomplete-js'
import '@algolia/autocomplete-theme-classic'
import MiniSearch from 'minisearch'

let miniSearch: MiniSearch | null = null

// Fetch the pre-built index once
async function loadIndex() {
  if (miniSearch) return miniSearch
  // const data = await fetch('/search-index.json').then(r => r.json()) // TODO
  const data = [
    { id: 1, title: "Once upon a time...", text: "There was a crying binky" },
    { id: 2, title: "Alexander", text: "James" },
  ];
  const ms = new MiniSearch({
    fields: ['title', 'text'],
  });
  ms.addAll(data);

  const msJSON = JSON.stringify(ms);
  console.log('msJSON:', msJSON);

  miniSearch = MiniSearch.loadJSON(msJSON, {
    fields: ['title', 'text'],
  })
  return miniSearch
}

export function init() {
  autocomplete({
    container: '#search',
    placeholder: 'Search posts…',
    // getSources can be async — autocomplete handles the promise
    async getSources({ query }) {
      if (!query) return []
      const ms = await loadIndex()
      const results = ms.search(query, {
        fuzzy: 0.2,
        prefix: true,
        boost: { title: 2 },
      })

      return [
        {
          sourceId: 'posts',
          getItems() {
            return results.slice(0, 8)
          },
          getItemUrl({ item }) {
            return item.url as string
          },
          templates: {
            item({ item, html }) {
              return html`
                <a class="aa-ItemLink" href="${item.url}">
                  <div class="aa-ItemContent">
                    <div class="aa-ItemTitle">${item.title}</div>
                  </div>
                </a>
              `
            },
            noResults() {
              return 'No results for this query.'
            },
          },
        },
      ]
    },
  })
}

