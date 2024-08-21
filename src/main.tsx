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
import AddPlaylist from './pages/add_playlist';
import Playlist from './pages/playlist';

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='playlist/:playlistId' element={<Playlist />} />
            <Route path='add-playlist' element={<AddPlaylist />} />
        </Route>,
    ),
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={route} />
    </React.StrictMode>,
);
