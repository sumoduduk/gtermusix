import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '@/App';
import { SavedVideo } from '@/types/interface';

const Playlist = () => {
    const [musicIds, setMusicIds] = useState<Array<string>>([]);
    const [songList, setSongList] = useState<Array<SavedVideo>>([]);

    const { playlistId } = useParams();

    const { musicStore } = useStore();

    useEffect(() => {
        if (!playlistId) return;
        if (musicIds.length === 0) return;
        (async () => {
            const musicObj = await Promise.all(
                musicIds.map(async (id) => {
                    try {
                        const musicVid = (await musicStore.getItem(
                            id,
                        )) as SavedVideo;

                        return musicVid;
                    } catch (error) {
                        console.log('error not present id = ', id);
                        console.log(error);
                    }
                }),
            );
            const fitered = musicObj.filter((elem) => elem !== undefined);
            setSongList(fitered);
        })();
    }, [musicIds]);

    if (!playlistId) {
        return (
            <div className='w-2/3 h-full flex flex-col gap-5'>
                <h1>Gtermusix</h1>
            </div>
        );
    }
};

export default Playlist;
