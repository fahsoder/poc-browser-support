import React from 'react'
import ReactDOM from 'react-dom'
import Bowser from "bowser";

const browser = Bowser.getParser(window.navigator.userAgent);

const isValidBrowser = browser.satisfies({
    edge: ">=16",
    firefox: ">=60",
    chrome: ">=66",
    safari: ">=11"
})

if(!isValidBrowser) {
    const BrowserFallback = () => {
        return (
            <div>tá usando ie mongol?</div>
        )
    }
    const container = document.getElementById("app")
    ReactDOM.unmountComponentAtNode(container)
    ReactDOM.render(<BrowserFallback />, container)    
}

console.log('udahsuhdasd', browser)