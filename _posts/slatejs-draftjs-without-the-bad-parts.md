---
title: 'Slate.js: Draft.js without the Bad Parts'
date: '2019-08-28T15:37:27.000Z'
---

Anyone who has used Facebook's open source package, `Draft.js` knows that while it's a powerful tool for building rich text editors, the API docs are underdeveloped, and can be very difficult to understand. The editor I wrote this blog post in was made by me with `Slate.js`, and before I found that, I was struggling to learn how to make Draft.js do what I wanted it to do. I don't have the expertise to go too into detail about comparing Slate and Draft, but a lot of that is covered here in the readme of Slate: [Slate Principles](https://github.com/ianstormtaylor/slate#principles). Instead I'll tell you about my use case: what I wanted to build with Draft, the problems I ran into, and how Slate made the process easier for me.

Given that this is a programming blog, the most important feature to me is beautiful code snippets with syntax highlighting. Like so:

```javascript
// A JavaScript comment
const language = 'JavaScript';
console.log(`This is definitely ${language}`);  // This is definitely JavaScript
```

I had `Prism.js` to handle the syntax highlighting.

I needed my editor to...

1.  Handle multi-line code blocks
2.  Keep all those lines within the tags `<pre><code> ... </code></pre>` (To comply with how Prism.js works)
3.  Have a way to specify the syntax (via adding a css class to a `<code>` tag: `language-javascript`)

Not too many requirements. This seemed very doable in Draft, especially considering that the example on [draftjs.org](https://draftjs.org) features a Code Block styling option. If you click the code block toggle, make it a couple lines long, and inspect the page, you'll see that each line has it's own `<pre>` tag. Ah, that fails requirement #2 for me, but I'm sure I can customize mine to behave differently.

At the end of the day, I did just want a rich text editor, much like the one on Draft.js' home page, but with my customized code blocks. I found an npm package `react-rte`, which is pretty much a pre-built rich text editor built on Draft.js, with the ability to customize _certain_ things further (with this package, Draft was being abstracted away, and I could only customize parts that the creators of react-rte designated). Out of the box, react-rte did have multi-line code blocks contained in a single `<pre>` tag, and the ability to insert a soft line-break to stay inside a code block with Shift + Enter. Not bad, until you try to _**paste**_ a bunch of code in... which is the main way I would be inserting code into blog posts, pasting it from my real editor.

So how do you solve this problem?

What would be needed is a special condition for code blocks. If the content block is a code block, insert another code line, without exiting that parent code block. _I'm sure this type of behavior would have been possible in Draft.js,_ but the trouble was figuring out _how_.

This is the main difference between Draft and Slate: Slate gives you tons of examples _with_ those examples being demonstrated on Slate's website, an excellent getting started walkthrough, and an API that actually makes sense.

Because of these offerings, my experience with Slate went something like this...

1.  Read the Walkthrough (a very pleasant experience might I add)
2.  Refer to examples... _"Oh look, 'Rich Text' and 'Code Highlighting' are exactly what I want, I'll just look at the source code for these and combine them into my own!"_
3.  Complete customization of my editor, referring to Slate's API docs

And there are many more examples I'll be pulling from. At the time of writing this post, my editor doesn't have support for images, but there's an example on Slate's site I'll be referring to.

Happy custom editor building ~
