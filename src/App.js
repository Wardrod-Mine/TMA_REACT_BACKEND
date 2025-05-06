import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import DataForm from './DataForm';
window.Telegram.WebApp 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/form" element={<DataForm />} />
      </Routes>
    </Router>
  );
}


function App() {
    const tg = window.Telegram ? window.Telegram.WebApp : null;


    useEffect(() => {
        tg.ready();
    }, []);

    const onClose = () => {
        tg.close();
    };

    return (
        <div className="App">
            <h1>Добро пожаловать в Telegram Mini App</h1>
            <button onClick={onClose}>Закрыть</button>
        </div>
    );
}

export default App;
