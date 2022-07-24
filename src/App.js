import React, { Fragment } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo"
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
    const urlParams = new window.URLSearchParams(window.location.search)
    const detailId = urlParams.get('detail')
    console.log(detailId)
    return (
        <div>
            <GlobalStyle />
            <Logo />
            {
                detailId
                ? <PhotoCardWithQuery id={detailId}/>
                : <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/pet/:id' element={<Home />} />
                    </Routes>
                </BrowserRouter>
            }

        </div>
    )
}
