import React, { Fragment } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo"
import { NavBar } from "./components/NavBar";
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export const App = () => {
/*     const urlParams = new window.URLSearchParams(window.location.search)
    const detailId = urlParams.get('detail') */
    return (
        <div>
            <BrowserRouter>
                <GlobalStyle />
                <Logo />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/pet/:categoryId' element={<Home />} />
                    <Route path='/detail/:detailId' element={<Detail />} />
                </Routes>
                <NavBar />
            </BrowserRouter>
        </div>
    )
}
