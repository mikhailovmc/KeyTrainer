import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { AuthProvider } from "./context/AuthProvider";
import { store } from './reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <App />
    </AuthProvider>
);


