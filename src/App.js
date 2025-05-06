import React, { useEffect } from 'react';
import './App.css';

function App() {
    const tg = window.Telegram.WebApp;

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
