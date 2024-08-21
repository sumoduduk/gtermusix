import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ playlistStore }: { playlistStore: LocalForage }) => {
    const [playlistName, setPlaylistName] = useState<Array<string>>([]);

    const getPl = async () => {
        let plKeys = await playlistStore.keys();
        if (plKeys.length === 0) return;

        const plNames = await Promise.all(
            plKeys.map(async (key) => {
                try {
                    const name = await playlistStore.getItem(key);
                    if (typeof name == 'string') {
                        return name;
                    }
                } catch (err) {
                    console.log(err);
                }
            }),
        );

        const filtered = plNames.filter((nm) => nm !== undefined);

        setPlaylistName(filtered);
    };

    // useEffect(() => {
    //     getPl();
    // }, []);

    return (
        <div className='w-1/3 h-screen overflow-scroll border-white border'>
            <h1>Songlist</h1>
            <Link to='/add-playlist'>+ Add Playlist</Link>
            <hr />

            <Link to='/playlist/1'>Playlist</Link>
        </div>
    );
};

export default Sidebar;
