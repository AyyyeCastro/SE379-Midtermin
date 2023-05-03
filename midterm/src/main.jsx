import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { UseStateDemo } from './components/UseStateDemo';
import ProductsList from './components/ProductsList'; 
import ProductDetail from './components/ProductDetail';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<UseStateDemo />} />
          <Route path="home" element={<UseStateDemo />} />
          <Route path="products" element={<ProductsList />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="*" element={<div>Route not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
