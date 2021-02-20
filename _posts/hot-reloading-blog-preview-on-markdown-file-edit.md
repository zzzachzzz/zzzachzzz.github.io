---
title: Hot Reloading Blog Preview on Markdown File Edit
date: '2021-02-20T16:23:26.604Z'
---
![Side by side web browser and vim hot reloading](/assets/blog-hot-reload.gif)

When building this feature for my blog, what I wanted is the snappiness of an in-browser blog post editor, where you have a split view showing the editor on one side, and the rendered post on the other, instantaneously updated as you type into the editor. I used to use an in-browser editor for this purpose, but I now wanted the ability to edit inside my editor of choice, Vim.

You may have noticed in the gif above that the page only updates once I save the file. If you want something that updates as you type, you could opt for an auto-save solution like a plugin specific to your editor.

Since I'm using Next.js, which comes with its own preconfigured dev server, I needed to customize the the Next.js dev server to add this functionality. This isn't actually mandatory, as you could run an Express server separate from your Webpack / Next.js / other dev server, to be responsible for the file watching and WebSocket server.

For Next.js, there's some good suggestions for how to achieve this in [Next.js GitHub issue](https://github.com/vercel/next.js/discussions/11419). One of the suggestions I tried, the package [next-remote-watch](https://github.com/hashicorp/next-remote-watch), ended up being too sluggish for my liking. This is because the mechanism used is triggering an actual Next.js hot reload, the same as what happens when editing a source file.

I ended up creating my own solution, utilizing:
* File watching (via [chokidar](https://www.npmjs.com/package/chokidar))
* WebSockets ([ws](https://www.npmjs.com/package/ws) for the dev server, and the built in browser [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) for the client)
* [Next.js custom server](https://nextjs.org/docs/advanced-features/custom-server) (only for development, not production)

These are the source files relevant for this feature:

* [dev-server.ts](https://github.com/zzzachzzz/zzzachzzz.github.io/blob/master/dev-server.ts) - Custom Next.js server, responsible for file watching and the WebSocket server.
* [/blog/edit/[slug].tsx](https://github.com/zzzachzzz/zzzachzzz.github.io/blob/master/pages/blog/edit/%5Bslug%5D.tsx) - Wrapper component for the blog post page, which connects to the WebSocket server.
* [/blog/[slug].tsx](https://github.com/zzzachzzz/zzzachzzz.github.io/blob/master/pages/blog/%5Bslug%5D.tsx) - The blog post page, that receives either static props from Next, or when in edit mode, dynamic props from the above wrapper component that manages the WebSocket connection.
