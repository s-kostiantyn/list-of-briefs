import React from 'react';
import './App.scss';

import { CurrentDate } from './modules/CurrentDate';
import { Outlet } from 'react-router-dom';

import warnImg from './assets/warn.svg';


export const App: React.FC = () => {  

  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <CurrentDate />
        </div>
      </header>
      
      <main className="page">
        <Outlet />
      </main>
      
      <footer className="footer"><img src={warnImg} alt="!" /> Warning: not all information may be true</footer>
    </div>
  )
}
