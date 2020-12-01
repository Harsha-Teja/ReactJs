import React from "./components/node_modules/react"
import {Switch, Route} from "./components/node_modules/react-router-dom"

import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {    
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Photos />
                </Route>
                
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </div>
    )
}

export default App