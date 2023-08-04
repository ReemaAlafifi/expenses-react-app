import React from 'react';
import ReactDOM from 'react-dom/client';
import MainLayout from './components/MainLayout';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainLayout></MainLayout>
  </React.StrictMode>
);

