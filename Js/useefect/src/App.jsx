import logo from './logo.svg';
import './App.css';
import { memo, useEffect, useState } from 'react';
import ToggleButton from './components/ToggleButton/ToggleButton';




function App() {


  return ( // bước 1
    <>
      <div className="main-app">
        <ToggleButton />
      </div>
    </>
  );
}

export default App;
