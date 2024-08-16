import { useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import './App.css';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
    const [greetMsg, setGreetMsg] = useState('');
    const [name, setName] = useState('');

    // async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    // setGreetMsg(await invoke("greet", { name }));
    // }

    return (
        <div className='flex w-screen bg-stone-900 text-gray-100'>
            <Sidebar />
            <Outlet />
        </div>
    );
}

export default App;
