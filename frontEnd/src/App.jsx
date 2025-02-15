import { useState, useEffect } from 'react'
import './App.css'
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import Editor from "react-simple-code-editor"
import axios from "axios"
import Markdown from "react-markdown"

function App() {
  const [count, setCount] = useState(0)

useEffect(() => {
  prism.highlightAll()
})

 const[review ,setReview] = useState("")
  
 const [code, setCode] = useState(  `function sum() {
  return 1+1;
}`)

async function reviewCode(){

  const response = await axios.post('http://localhost:3000/ai/get-review', { code })

  setReview(response.data)

}

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
          <Editor
          value={code}
          onValueChange={newCode => setCode(newCode)}
          highlight={code => prism.highlight(code, prism.languages.js, 'js')}
          padding={10}
          style={{
            height:"100%",
            width:"100%",
            borderRadius: "13px",
            border:"2px solid white"
          }}/>

          </div>
          <div onClick={reviewCode} className="review">Review</div>
        </div>
        <div className="right"><Markdown>{review}</Markdown></div>
      </main>
    </>
  )
}

export default App
