import { unified } from 'unified';
import markdownParser from 'remark-parse';
import type { Tree } from '@/types';
import * as rss from './rss';

function markdownToTree(markdown: string): Tree {
  return unified().use(markdownParser).parse(markdown);
}

describe('rss', () => {
  describe('treeToHtml', () => {
    it('converts a tree from markdown to the expected html', () => {
      const html = rss.treeToHtml(markdownToTree(
        "# Header level 1\n" +
        "## Header level 2\n" +
        "### Header level 3\n" +
        "#### Header level 4\n" +
        "##### Header level 5\n" +
        "###### Header level 6\n" +
        "There's always:  \n" +
        "1. Ordered\n" +
        "2. Lists\n" +
        "3. **Bold**\n" +
        "4. *Italic*\n" +
        "* Unordered\n" +
        "* Lists\n\n" +
        "Line  \n" +
        "Break\n" +
        ">Blockquote hey\n" +
        "```python\n" +
        "print('escaped <code>')\n" +
        "```\n" +
        "![Internal Image](/assets/hi-mom.png)" +
        "![External Image](https://google.com/bard-cry.png)" +
        "[Internal Link](/blog/how-to)" +
        "[External Link](https://stedolan.github.io/jq)" +
        "[Section Link](#header-level-1)"
      ));
      expect(html).toMatchInlineSnapshot(`"<h1 id="header-level-1">Header level 1</h1><h2 id="header-level-2">Header level 2</h2><h3 id="header-level-3">Header level 3</h3><h4 id="header-level-4">Header level 4</h4><h5 id="header-level-5">Header level 5</h5><h6 id="header-level-6">Header level 6</h6><p>There&#x27;s always:</p><ol><li><p>Ordered</p></li><li><p>Lists</p></li><li><p><b>Bold</b></p></li><li><p><i>Italic</i></p></li></ol><ul><li><p>Unordered</p></li><li><p>Lists</p></li></ul><p>Line<br/>Break</p><blockquote><p>Blockquote hey</p></blockquote><pre><code>print(&#x27;escaped &lt;code&gt;&#x27;)</code></pre><p><img src="http://localhost:3000/assets/hi-mom.png" alt="Internal Image"/><img src="https://google.com/bard-cry.png" alt="External Image"/><a href="http://localhost:3000/blog/how-to">Internal Link</a><a href="https://stedolan.github.io/jq">External Link</a><a href="#header-level-1">Section Link</a></p>"`);
    });
  });
});

