var Content = String.raw`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a sapien sed eros porta scelerisque eget quis ipsum. Ut non tincidunt metus, sed consectetur metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ut faucibus orci, non cursus nulla. Sed ut vulputate ipsum, rutrum ultricies magna. Nam posuere dui ac feugiat porta. In et suscipit nisi. Nulla a elit dapibus, porttitor mauris ut, malesuada nulla. Maecenas dignissim fringilla lectus eu.</p><p></p><pre><code class="language-python"><div>with open(&#x27;job/creds.json&#x27;, &#x27;r&#x27;) as file:
</div><div>        creds = json.load(file)
</div></code></pre><p>Integer lacus neque, feugiat ut neque eget, malesuada lobortis nisl. Pellentesque eleifend consequat elementum. Nulla facilisis ac ex vitae ornare. Praesent non urna rutrum, vulputate augue a, efficitur erat. Etiam sagittis dui at neque tristique, at aliquam enim viverra. Vivamus eu est dapibus, faucibus nulla sit amet, faucibus eros. Fusce libero elit, aliquet nec viverra id, condimentum sed massa. Sed eget feugiat nibh. Morbi finibus rutrum justo, sit amet varius ex sodales non. Donec vitae tempus mauris. Maecenas id sagittis odio. Fusce id maximus mauris, et aliquet purus.</p><p></p><p>Well ok then!</p><p></p><p></p><pre><code class="language-python"><div>from job import tagging_paths
</div><div>from job import marsha, sheet_title
</div><div>
</div><div>
</div><div>def login():
</div><div>    with open(&#x27;job/creds.json&#x27;, &#x27;r&#x27;) as file:
</div><div>        creds = json.load(file)
</div><div>    e = find_e(&#x27;#vui-login-name-inputEl&#x27;)
</div><div>    e.send_keys(creds[&#x27;user&#x27;])
</div><div>    e = find_e(&#x27;#vui-login-pass-inputEl&#x27;)
</div><div>    e.send_keys(creds[&#x27;pass&#x27;])
</div><div>    e = find_e(&#x27;#vui-login-link-submit-btnEl&#x27;)
</div><div>    e.click()
</div><div>
</div><div>
</div><div># Build.base_tags should be passed in
</div><div>def edit_quick_actions(categories_needed: List[List[str]]) -&gt; None:
</div><div>    # Check if Quick Action bar is expanded
</div><div>    e = find_e(&#x27;#vui-workspace-ribbon-quickaction&#x27;)
</div><div>    if not (re.search(r&#x27;.*(vui-ribbon-selected).*&#x27;, e.get_attribute(&#x27;class&#x27;))):
</div><div>        e.click()
</div><div>    all_quick_actions = find_e_wait(&#x27;#vui-workspace-drawer-new-quickaction &gt; ul&#x27;).text.split(&#x27;\n&#x27;)
</div><div>
</div><div>    indices_of_qa_to_edit = [all_quick_actions.index(qa)+1 for qa in all_quick_actions \
</div><div>                             if (re.search(r&#x27;^0[0-9]{2}&#x27;, qa) and re.search(r&#x27;\[M\]&#x27;, qa) )]
</div><div>
</div></code></pre><p></p><p></p><p></p><p>Aliquam a tempor diam. Nam eu massa suscipit, varius felis et, pulvinar diam. Donec ex justo, ultricies at ipsum eu, convallis cursus lacus. Donec ultrices odio lorem, in consequat purus finibus non. Sed eget semper tortor. Ut condimentum metus pharetra dictum rutrum. Morbi sodales dolor ligula. Integer nec consequat risus, eu varius dui.</p><p></p><p>Nunc viverra nisl enim, commodo tristique risus lobortis at. Etiam ultricies dolor neque, a accumsan lectus pretium vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a facilisis nunc, sit amet tincidunt nisl. Etiam quis arcu vitae odio finibus auctor porta vitae est. Nunc id diam accumsan, commodo felis sit amet, consectetur risus. Duis nulla quam, volutpat vel vulputate in, sollicitudin vitae purus. Fusce vitae luctus lacus. Nulla non velit vel ex dignissim congue et ac est.</p>`
export default Content;
