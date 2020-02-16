/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import './styles/style.css'
import logo from './images/penrose.svg'

export default function NotFound() {
  return (
    <div className="App">
      <h1 className="not-found-text"> Still cooking... 🍳 </h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
    </div>
  );
}
