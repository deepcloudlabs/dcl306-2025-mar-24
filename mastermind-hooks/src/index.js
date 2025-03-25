import React from 'react';
import ReactDOM from 'react-dom/client';
import Mastermind from './Mastermind';
import "bootstrap/dist/css/bootstrap.css";
import {Routes} from "react-router-dom";
import {BrowserRouter, Route} from "react-router";
import PlayerLoses from "./player-loses";
import PlayerWins from "./player-wins";
const routing =
    <Routes>
        <Route path="/" element={<Mastermind/>} exact/>
        <Route path="/wins" element={<PlayerWins/>} exact/>
        <Route path="/loses" element={<PlayerLoses/>} exact/>
    </Routes>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        {routing}
    </BrowserRouter>

);
