import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import './firebase';
import {useAuth} from 'hooks/use-auth';

function App() {
    const {isAuth, email} = useAuth()
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/*' element={!isAuth ? <Navigate to='/login'/> : <HomePage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/register' element={<RegisterPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
