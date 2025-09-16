import { createElement } from "react"
import { createRoot } from "react-dom/client"
import "materialize-css/dist/css/materialize.min.css"

const globalStyles = `
  * , *::after , *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
  }
  a { -webkit-tap-highlight-color: transparent; }
  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
  }
  body {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    background-image: linear-gradient(to top, #0250c5 0%, #d43f8d 100%);
  }
  aside {
    border-left: 5px solid springgreen;
    padding: 1rem;
    background-color: #00ff7f33;
    color: springgreen;
    transition: filter 0.5s ease;
  }
  aside:hover {
    filter: hue-rotate(120deg);
  }
`

function App() {
  return (
    <>
      <style>{globalStyles}</style>
      <aside className="z-depth-2">Simple but elegant</aside>
    </>
  )
}

const rootElement = document.createElement("div")
document.body.appendChild(rootElement)
createRoot(rootElement).render(<App />)
