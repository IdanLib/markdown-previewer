const editor = document.querySelector("#editor");
const previewer = document.querySelector("#preview");

const renderToPreview = editor.addEventListener('input', (event) => {
    const parsedText = marked.parse(event.target.value);
    previewer.innerHTML = parsedText;
});


const setDefault = () => {
    const defaultText = `# Welcome to the Markdown Previewer!
---
# heading 1
## heading 2
[Here's a link](http://google.com)
\n
\` This is inline text \` \` with some more inline text\`
Here's a list:
- List Item One
- List Item Two
- List Item Three
**Here is bolded text.**
Here are some cute kitties: \n
[![Puppies Delight](http://img.youtube.com/vi/eX2qFMC8cFo/0.jpg)](https://youtu.be/eX2qFMC8cFo)

\`\`\`
Here's some code: 
function example() {
    console.log("Hello World!");
}
\`\`\`
> blockquote
<dl>
  <dt>A list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags instead</em>.</dd>
</dl>

                `;

    const editor = document.querySelector("#editor");
    const previewer = document.querySelector("#preview");
    editor.value = defaultText;
    marked.use({
        breaks: true
    });
    previewer.innerHTML = marked.parse(editor.value);
}