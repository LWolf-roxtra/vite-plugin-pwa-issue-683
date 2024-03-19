// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <h1><a href="https://github.com/vite-pwa/vite-plugin-pwa/issues/683">Bug reproduction for issue <i>vite-plugin-pwa #683</i></a></h1>
                <span>Upon service worker initialization, a console error (Failed to register a ServiceWorker for scope ... with script ...: The script has an unsupported MIME type (text/html).</span><br /><br />
                <span>This error occurs, as path <i>http://localhost:5173/my/app/dev-sw.js?dev-sw</i> is not available.</span>
            </div>
        </>
    )
}

export default App
