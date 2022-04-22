import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { createGlobalStyle } from "styled-components"

import AccountProvider from "@context/account.context"
import Home from "@views/Home"
import Signin from "@views/Signin"
import Signup from "@views/Signup"

const Styles = createGlobalStyle`
    :root {
        --red-light: 255,59,48;
        --red-dark: 255, 69, 58;
        --orange-light: 255, 149, 0;
        --orange-dark: 255, 159, 10;
        --yellow-light: 255, 204, 0;
        --yellow-dark: 255, 214, 10;
        --green-light: 52, 199, 89;
        --green-dark: 48, 209, 88;
        --mint-light: 0, 199, 190;
        --mint-dark: 102, 212, 207;
        --teal-light: 48, 176, 199;
        --teal-dark: 64, 200, 224;
        --cyan-light: 50, 173, 230;
        --cyan-dark: 100, 210, 255;
        --blue-light: 0, 122, 255;
        --blue-dark: 10, 132, 255;
        --indigo-light: 88, 86, 214;
        --indigo-dark: 94, 92, 230;
        --purple-light: 175, 82, 222;    
        --purple-dark: 191, 90, 242;
        --pink-light: 255, 45, 85;
        --pink-dark: 255, 55, 95;
        --brown-light: 162, 132, 94;        
        --brown-dark: 172, 142, 104;
        --gray-light: 142, 142, 147;
        --gray-dark: 142, 142, 147;
        --gray-2-light: 174, 174, 178;
        --gray-2-dark: 99, 99, 102;
        --gray-3-light: 199, 199, 204;
        --gray-3-dark: 72, 72, 74;
        --gray-4-light: 209, 209, 214;
        --gray-4-dark: 58, 58, 60;
        --gray-5-light: 229, 229, 234;
        --gray-5-dark: 44, 44, 46;
        --gray-6-light: 242, 242, 247;
        --gray-6-dark: 28, 28, 30;
    }
    *::before, *, *::after {
        box-sizing: border-box;
    }
    * {
        margin: 0;
        padding: 0;
        font-family: "Inter", sans-serif;
    }
    svg {
        display: block;
        pointer-events: none;
    }
    a {
        color: rgb(var(--indigo-dark));
    }
    button {
        font-size: 1rem;
        font-weight: normal;
        font-family: inherit;
        cursor: pointer;
    }
    input {
        font-size: 1rem;
        font-weight: normal;
        font-family: inherit;
    }
    body {
        font-size: 16px;
        color: rgb(var(--gray-6-dark));
    }
    body.blur #app {
        filter: blur(5px);
        pointer-events: none;
    }
    body.blur #app::after {
        content: "";
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.05);
    }
`

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AccountProvider>
                <Styles />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signin" element={<Signin />} />
                </Routes>
            </AccountProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("app")
)
