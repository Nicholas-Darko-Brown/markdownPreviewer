import React from 'react'
import { useState } from 'react';
import { marked } from 'marked';
import './App.css';


marked.setOptions({
   breaks: true,
})

const renderer = new marked.Renderer()
renderer.link = function (href, title, text){
   return `<a target="_blank" href="${href}">${text}</a>`
}

const initialState = `
  # Header 1
  ## Sub Header 2
  ### Header 3
  
  [My GitHub Profile](https://www.github.com/Nicholas-Darko-Brown)
  
  \`<div>Hello World</div>\`
  
 \`\`\` 
    let x = 5; 
    let y = 2;
    let z = x + y;
  \`\`\`
  
  1. Twitter
  2. LinkedIn
  3. Facebook
  
  > This is a blockquote

  ![Google Logo](https://www.google.com/logos/doodles/2021/seasonal-holidays-2021-6753651837109324-s.png)
  
  **Bolded Text**
  `;

const App = () => {
   const [text, setText] = useState(initialState)

   const handleChange = e => {
      setText(e.target.value)
   }

   return (
      <div className="my-4 container">
          <h2 className="title text-center fw-bold">React Markdown Previewer</h2>
          <div className="row my-5">
            <div className="col-6">
               <h2 className="headers">Editor</h2>
               <textarea
                  name="editor"
                  id="editor"
                  value={text}
                  onChange={handleChange}
                  className="my-4"
               />
            </div>

            <div className="col-6">
               <h2 className="headers">Previewer</h2>
               <div
                  className="preview my-4"
                  id="preview"
                  dangerouslySetInnerHTML={{
                     __html: marked(text, { renderer: renderer })
                  }}
               />
            </div>
         </div>
      </div>
   )
}

export default App
