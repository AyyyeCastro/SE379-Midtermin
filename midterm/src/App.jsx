import './App.css';
import { Routes, Route, Link, useNavigate, Outlet, BrowserRouter} from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const handleShowHome = () => {
    navigate('home');
  };

  const handleShowProducts = () => {
    navigate('products');
  };

  return (
    <div className="App">
      <nav>
          <button onClick={handleShowHome} className="btnNav">Home</button>
          <button onClick={handleShowProducts} className="btnNav">Products</button>
      </nav>
      <Outlet />
    </div>
  );
}


export default App;
