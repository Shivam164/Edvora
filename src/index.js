import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FilterContextProvider } from './Contexts/GlobalState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))dd
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
