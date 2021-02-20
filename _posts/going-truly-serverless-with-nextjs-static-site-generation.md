---
title: Going Truly Serverless with Next.js Static Site Generation
date: '2021-02-20T14:35:05.888Z'
---

With the hype of the [Jamstack](https://jamstack.org), and the benefits it offers, I made the switch from MERN stack to JAM stack for my blog. The most appealing benefits to me in my use case were:
1. Improved SEO, for my site that can be 100% statically generated.
2. Simplified architecture. No more databases and servers, just files served from GitHub Pages.
3. Using Git as my "CMS". Switching from storing blog posts in a database, to storing them in `.md` files, tracked by Git.

## Choosing a React Static Site Generator

Coming from a MERN app, I needed a SSG solution for React. I considered choosing between three different options:
* [Gatsby](https://github.com/gatsbyjs/gatsby)
* [Next.js](https://github.com/vercel/next.js)
* [React Static](https://github.com/react-static/react-static)

The two most popular React frameworks are Gatsby & Next.js. Gatsby is a very powerful tool that emphasizes a plugin ecosystem. Gatsby can do a lot. As I went through Gatsby's vast documentation, I was having difficulty figuring out how to do what I wanted to do, for my fairly simple use case. After this experience, I was drawn to the simplicity of React Static. Ultimately, I ended up choosing Next.js for a few different reasons, one being their documentation coupled with their collection of examples on GitHub. I used their [blog-starter template](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) as a starting point. Another reason I chose Next is their great out-of-the-box TypeScript support.

The last minor thing that sealed the deal for my decision, was the React team announcing that they are collaborating with the Next.js team on React's new experimental feature, "Server Components". Relevant links:
* [Introducing Zero-Bundle-Size React Server Components](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html)
* [(Timestamp in the talk where Dan Abramov mentions the Next.js collab)](https://youtu.be/TQQPAU21ZUw?t=2570)

While not a huge factor, it gave me the impression that the design philosophies of Next.js and the React core team align the most closely, and that Next.js would be receiving first-class support for this feature.

## Migrating from MERN to JAM
Source code can be found here:
* Post-migration GitHub source: <https://github.com/zzzachzzz/zzzachzzz.github.io/tree/master>
* Pre-migration GitHub source: <https://github.com/zzzachzzz/zzzachzzz.github.io/tree/2ab6f0b10606162a57b946461c4dae74e2a295d5>

Aside from the usual steps to migrate a common React app to a Next.js React app, there were a few other things I needed to handle in the migration. There would be changes to accomdate for the removal of a server; no Express & no MongoDB. There would also be some small changes to account for a React app utilizing SSG or SSR (server-side rendering), specifically the way CSS is loaded, depending on the tool you use for CSS.

### MongoDB to .md Files
For moving the content from MongoDB to markdown files, I created a migration script: [backend/migrations/db-to-markdown-file.js](https://github.com/zzzachzzz/zzzachzzz.github.io/blob/fc62221055adea46ef43803c973b28445262c448/backend/migrations/db-to-markdown-file.js)

### CSS for SSG / SSR
Depending on which tool you use for CSS, Next.js documents how to use it in SSG & SSR here: <https://nextjs.org/docs/basic-features/built-in-css-support>

From there, they link to examples on their GitHub. I use `styled-components`, so I followed their example here: <https://github.com/vercel/next.js/tree/canary/examples/with-styled-components>

### Hosting a Static Site on GitHub Pages
In addition to the `next build` script, to deploy a fully static site without a server, the `next export` script is used: <https://nextjs.org/docs/advanced-features/static-html-export>

When hosting the static build on a git branch on GitHub Pages, the naming of the exported `_next/` directory triggers Jekyll on GitHub Pages, as directories with a leading underscore have a special meaning to Jekyll. This unexpected side effect resulted in 404s for certain static assets my site was trying to fetch. To disable Jekyll processing on GitHub pages, we need to provide a `.nojekyll` file at the root. This was my final build script in my `package.json` file:  
`"build": "next build && next export && touch ./out/.nojekyll"`  
More info here: <https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages>

While not mandatory, I do recommend the [gh-pages](https://www.npmjs.com/package/gh-pages) npm package if you do intend to deploy to GitHub Pages. By default it will push to a branch named `gh-pages`. You'll want to configure your GitHub repo's settings to serve GitHub Pages from this branch. In conjunction with the build script I mentioned above, this was my deploy script:  
`"deploy": "yarn run build && gh-pages --dist out --dotfiles"`  
`out/` is the default output directory name for a Next.js static export, and we need to include the option `--dotfiles` for the `.nojekyll` file to be included in the push to the `gh-pages` branch.

### Getting Prism.js to Work with SSG / SSR
I never found it straightforward to set up Prism.js for code highlighting in a React app. When my pages were still being rendered client-side, I used `React.useEffect` to trigger Prism to highlight all code blocks:
```jsx
React.useEffect(() => {
  Prism.highlightAll();
}, []);
```
While I could still have the effect be performed client-side, I wanted to go all in on having my site be fully statically generated. In my [TreeToJSX.tsx](https://github.com/zzzachzzz/zzzachzzz.github.io/blob/master/components/TreeToJSX.tsx) component, responsible for rendering a markdown document tree to JSX, I came up with the following solution to have the Prism highlighted HTML be built:
```tsx
// Add leading whitespace to <code> className due to className mismatch caused by Prism injecting class
const CodeBlock = ({ lang, children }: { lang?: string; children: string; }) => {
  const langCls = ` language-${lang || 'none'}`;
  if (lang) {
    const highlightedCode = Prism.highlight(children, Prism.languages[lang], lang);
    return (
      <Pre className={langCls}>
        <code className={" " + langCls} dangerouslySetInnerHTML={{__html: highlightedCode}}></code>
      </Pre>
    );
  } else {
    return (
      <Pre className={langCls}>
        <code className={" " + langCls}>{children}</code>
      </Pre>
    );
  }
};
```
Prism offers a low level `highlight` function that will return stringified HTML of the syntax highlighted code we provide in the string `children`. I was getting a warning about a mismatching className between the client and server (server in development, for SSG). The mismatch was caused by leading whitespace in one but not the other: `" language-jsx"` vs `"language-jsx"`. This was some oddity caused by the way Prism injects CSS classes, that I was able to workaround by adding leading whitespace to the class names.

## Hot Reloading a Rendered Blog Post Upon its Markdown File Being Edited

I outline this feature in a separate post:  
[Hot Reloading Blog Preview on Markdown File Edit](/blog/hot-reloading-blog-preview-on-markdown-file-edit)

![Side by side web browser and vim hot reloading](/assets/blog-hot-reload.gif)

