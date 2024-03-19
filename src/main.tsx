import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initSW } from './serviceworker/ServiceWorkerHelper.ts';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

initSW();