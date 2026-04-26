// search.ts (client-side)
import { autocomplete, type AutocompleteOptions } from '@algolia/autocomplete-js'
import '@algolia/autocomplete-theme-classic'
import MiniSearch from 'minisearch'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '@algolia/autocomplete-theme-classic'
import {
  createElement,
  Fragment,
  useEffect,
  useRef,
  type ComponentProps,
} from 'react'
import { createRoot, type Root } from 'react-dom/client'

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
    storeFields: ['title', 'url', 'excerpt'],  // fields to return with results ← this is what matters
  });
  ms.addAll(data);

  const msJSON = JSON.stringify(ms);
  console.log('msJSON:', msJSON);

  miniSearch = MiniSearch.loadJSON(msJSON, {
    fields: ['title', 'text'],
    storeFields: ['title', 'url', 'excerpt'],  // fields to return with results ← this is what matters
  })
  return miniSearch
}

// Autocomplete.tsx — the reusable wrapper component

type AutocompleteProps = Omit<AutocompleteOptions<any>, 'container'>

export function Autocomplete(props: AutocompleteProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const panelRootRef = useRef<Root | null>(null)
  const rootRef = useRef<Element | DocumentFragment | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const instance = autocomplete({
      container: containerRef.current,
      // Tell autocomplete to use React's vdom instead of Preact's
      renderer: { createElement, Fragment, render: () => {} },
      // React 18: manage the root ourselves with createRoot
      render({ children }, root) {
        if (!panelRootRef.current || rootRef.current !== root) {
          rootRef.current = root
          panelRootRef.current?.unmount()
          panelRootRef.current = createRoot(root)
        }
        panelRootRef.current.render(children)
      },
      ...props,
    })

    return () => instance.destroy()
  }, [props])

  return <div ref={containerRef} />
}

// SearchResult.tsx — a normal React component used as an item template
interface Hit {
  id: string
  title: string
  excerpt: string
  url: string
}

export function SearchResult({ hit }: { hit: Hit }) {
  return (
    <a href={hit.url} className="aa-ItemLink">
      <div className="aa-ItemContent">
        <div className="aa-ItemIcon">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor">
            <path d="M9 12h6M9 16h6M7 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2h-2" />
            <path d="M9 4h6v4H9V4z" />
          </svg>
        </div>
        <div className="aa-ItemContentBody">
          <div className="aa-ItemContentTitle">{hit.title}</div>
          {hit.excerpt && (
            <div className="aa-ItemContentDescription">{hit.excerpt}</div>
          )}
        </div>
      </div>
    </a>
  )
}

// BlogSearch.tsx — wires MiniSearch into the Autocomplete component

export function BlogSearch() {
  return (
    <Autocomplete
      placeholder="Search posts…"
      openOnFocus={false}
      getSources={async function getSources({ query }) {
        if (!query) return []
        const ms = await loadIndex()
        const hits = ms.search(query, {
          fuzzy: 0.2,
          prefix: true,
          boost: { title: 2 },
        })

        return [
          {
            sourceId: 'posts',
            getItems() {
              return hits.slice(0, 8)
            },
            getItemUrl({ item }) {
              return item.url
            },
            templates: {
              // Because we set renderer to React, templates can return JSX directly.
              // `item` here is the raw MiniSearch result object.
              item({ item }) {
                return <SearchResult hit={item} />
              },
              noResults() {
                return (
                  <div className="aa-ItemContent" style={{ padding: '12px 16px', color: 'var(--aa-muted-color)' }}>
                    No results found.
                  </div>
                )
              },
              header() {
                return (
                  <div style={{ padding: '8px 16px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--aa-muted-color)' }}>
                    Posts
                  </div>
                )
              },
            },
          },
        ]
      }}
    />
  )
}

