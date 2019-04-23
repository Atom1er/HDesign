import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import registerServiceWorker from "./registerServiceWorker";
import './index.css';
import App from './App';
import PhotoWidgetUploader from './components/PhotoWidgetUploader';

render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));