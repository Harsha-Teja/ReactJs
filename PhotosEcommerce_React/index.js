import React from "./components/node_modules/react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "./components/node_modules/react-router-dom"

import {ContextProvider} from "./Context"
import App from "./App"

ReactDOM.render(
    <ContextProvider>
        <Router>
            <App />
        </Router>
    </ContextProvider>, 
    document.getElementById("root")
)
