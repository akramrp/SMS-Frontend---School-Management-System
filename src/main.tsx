import React from 'react';import{createRoot}from'react-dom/client';import App from './app/App';import 'bootstrap/dist/css/bootstrap.min.css';import 'bootstrap-icons/font/bootstrap-icons.css';import './styles/global.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
