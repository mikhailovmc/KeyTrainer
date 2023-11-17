import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { AuthProvider } from "./context/AuthProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <App />
    </AuthProvider>
);


