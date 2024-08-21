import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '@/App';
import { SavedVideo } from '@/types/interface';

import data from '@/data/west.json';
import { CardSong } from '@/components/ui/card';

const Playlist = () => {
    // const [musicIds, setMusicIds] = useState<Array<string>>([]);
    // const [songList, setSongList] = useState<Array<SavedVideo>>([]);

    let data_song = data as Array<SavedVideo>;
    const { playlistId } = useParams();
    //
    // const { musicStore } = useStore();
    //
    // useEffect(() => {
    //     if (!playlistId) return;
    //     if (musicIds.length === 0) return;
    //     (async () => {
    //         const musicObj = await Promise.all(
    //             musicIds.map(async (id) => {
    //                 try {
    //                     const musicVid = (await musicStore.getItem(
    //                         id,
    //                     )) as SavedVideo;
    //
    //                     return musicVid;
    //                 } catch (error) {
    //                     console.log('error not present id = ', id);
    //                     console.log(error);
    //                 }
    //             }),
    //         );
    //         const fitered = musicObj.filter((elem) => elem !== undefined);
    //         setSongList(fitered);
    //     })();
    // }, [musicIds]);

    if (!playlistId) {
        return (
            <div className='w-2/3 h-full flex flex-wrap gap-2'>
                <h1>Gtermusix</h1>
            </div>
        );
    }

    return (
        <div className='w-2/3 h-full flex flex-col'>
            <div className='w-full h-4/5 p-3 grid grid-cols-5 justify-center justify-items-center gap-4 overflow-auto'>
                {data_song.map((card, i) => (
                    <CardSong card={card} index={i} />
                ))}
            </div>
            <div></div>
        </div>
    );
};

export default Playlist;
