import React, { useContext, Fragment } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo"
import { NavBar } from "./components/NavBar";
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Context } from "./Context";
import { NotFound } from "./pages/NotFound";


export const App = () => {
    const {isAuth} = useContext(Context)
    return (
        <div>
            <BrowserRouter>
                <GlobalStyle />
                <Logo />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/pet/:categoryId' element={<Home />} />
                    <Route path='/detail/:detailId' element={<Detail />} />
                    {!isAuth && <Route path='/login' element={<NotRegisteredUser />}/>}
                    {!isAuth && <Route path='/favs' element={<Navigate to='/login' />}/>}
                    {!isAuth && <Route path='/user' element={<Navigate to='/login' />}/>}
                    {isAuth && <Route path='/login' element={<Navigate to='/' />}/>}
                    <Route path='/favs' element={<Favs />} />
                    <Route path='/user' element={<User />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <NavBar />
            </BrowserRouter>
        </div>
    )
}