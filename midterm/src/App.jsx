import { UseStateDemo } from './components/UseStateDemo';
import { useState } from 'react';
import UseEffectDemo from './components/UseEffectDemo';
import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const handleShowUseStateDemo = () => {
    navigate('state-demo');
  };

  const handleShowUseEffectDemo = () => {
    navigate('effect-demo');
  };

  return (
    <div className="App">
      <hr />
      {/* <Link to="state-demo">this is the use state demo link</Link> */}
      <button onClick={() => handleShowUseStateDemo()} className="button">
        UseState Demo
      </button>
      <button onClick={() => handleShowUseEffectDemo()} className="button">
        UseEffect Demo
      </button>

      <Outlet />
    </div>
  );
}

export default App;
