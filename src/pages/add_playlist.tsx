import { useStore } from '@/App';
import { Button } from '@/components/ui/button';
import { getPlaylist } from '@/lib/invid';
import { SavedVideo } from '@/types/interface';
import { FormEvent } from 'react';

const AddPlaylist = () => {
    const { musicStore, playlistStore } = useStore();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const id = formData.get('id');
        if (!id) return;
        if (typeof id !== 'string') return;

        const data_playlist = await getPlaylist(id);
        if (!data_playlist) return;
        const name = formData.get('name') as string | null;

        const name_playlist = name ? name : data_playlist.title;

        for (const vidObj of data_playlist.videos) {
            let thumb = vidObj.videoThumbnails;

            let default_thumbail = thumb.find((s) => s.quality == 'default');

            if (!default_thumbail) return;
            let thum_url = default_thumbail.url;
            const idVid = vidObj.videoId;

            const saved_vid: SavedVideo = {
                videoId: idVid,
                title: vidObj.title,
                videoThumbnails: thum_url,
                author: vidObj.author,
            };

            musicStore.setItem(idVid, saved_vid);
        }

        playlistStore.setItem(id, name_playlist);
    };

    return (
        <form onSubmit={handleSubmit} className='flex h-full w-2/3'>
            <div className=' flex-col gap-3 flex m-auto w-1/2'>
                <label>Playlist Id</label>
                <input type='text' name='id' className='text-gray-800 px-1' />

                <label>Playlist Name</label>
                <input
                    type='text'
                    name='name'
                    placeholder='Optional'
                    className='text-gray-800 px-1'
                />

                <Button type='submit' variant='destructive'>
                    Submit Playlist
                </Button>
            </div>
        </form>
    );
};

export default AddPlaylist;
