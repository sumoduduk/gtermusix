// import { useState } from 'react';
// import { invoke } from '@tauri-apps/api/tauri';
import './App.css';
import { Outlet, useOutletContext } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import localforage from 'localforage';

type ContextType = {
    musicStore: LocalForage;
    playlistStore: LocalForage;
    playlistNameStore: LocalForage;
};

function App() {
    // const [greetMsg, setGreetMsg] = useState('');
    // const [name, setName] = useState('');

    const musicStore = localforage.createInstance({
        name: 'music_store',
    });

    const playlistNameStore = localforage.createInstance({
        name: 'playlist_name_store',
    });

    const playlistStore = localforage.createInstance({
        name: 'playlist_store',
    });

    // async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    // setGreetMsg(await invoke("greet", { name }));
    // }

    return (
        <div className='flex w-screen h-screen bg-stone-950 text-gray-100'>
            <Sidebar playlistStore={playlistStore} />
            <Outlet
                context={
                    {
                        musicStore,
                        playlistStore,
                        playlistNameStore,
                    } satisfies ContextType
                }
            />
        </div>
    );
}

export function useStore() {
    return useOutletContext<ContextType>();
}

export default App;
