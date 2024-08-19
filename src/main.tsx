import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import Music from './pages/music';

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='music/' element={<Music />} />
        </Route>,
    ),
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={route} />
    </React.StrictMode>,
);
