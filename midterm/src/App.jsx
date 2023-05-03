import { UseStateDemo } from './components/UseStateDemo';
import { useState } from 'react';
import UseEffectDemo from './components/ProductsList';
import './App.css';
import { Routes, Route, Link, useNavigate, Outlet, BrowserRouter} from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const handleShowUseStateDemo = () => {
    navigate('home'); // url
  };
  const handleShowProducts = () => {
    navigate('products'); // url
  };

  return (
    <div className="App">
      <hr />
      {/* <Link to="state-demo">this is the use state demo link</Link> */}
      <button onClick={() => handleShowUseStateDemo()} className="button">
        Home
      </button>
      <button onClick={() => handleShowProducts()} className="button">
        Products
      </button>

      <Outlet />
    </div>
  );
}

export default App;
