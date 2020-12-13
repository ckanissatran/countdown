import React from 'react';
import './App.css';
import Home from './Home'
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Orbitron:300,400,700', 'sans-serif']
  }
});

function App() {
  return (
    <Home/>
  );
}

export default App;
