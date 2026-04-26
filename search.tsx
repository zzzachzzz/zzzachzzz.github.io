// search.ts (client-side)
import { autocomplete } from '@algolia/autocomplete-js'
import '@algolia/autocomplete-theme-classic'
import MiniSearch from 'minisearch'
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// https://www.algolia.com/doc/ui-libraries/autocomplete/integrations/using-react

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

export function init({ containerRef, panelRootRef, rootRef }) {
  autocomplete({
    container: containerRef.current,
    renderer: {
      createElement: React.createElement,
      Fragment: React.Fragment,
      render: (...args) => ReactDOM.render(,
    },
    render({ children }, root) {
      if (!panelRootRef.current || rootRef.current !== root) {
        rootRef.current = root;

        panelRootRef.current?.unmount();
        panelRootRef.current = createRoot(root);
      }

      panelRootRef.current.render(children);
    },
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
            item(itemProps) {
              const { item } = itemProps;
              console.log('itemProps:', itemProps);
              return (
                <a className="aa-ItemLink" href={item.url as any}>
                  <div className="aa-ItemContent">
                    <div className="aa-ItemTitle">{item.title as any}</div>
                  </div>
                </a>
              );
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

