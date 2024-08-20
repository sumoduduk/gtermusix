import { PlaylistInterface } from '@/types/interface';

export async function getPlaylist(id: string) {
    try {
        const endpoint = 'https://iv.ggtyler.dev/api/v1/playlists/' + id;

        const res = await fetch(endpoint);
        const data = await res.json();

        return data as PlaylistInterface;
    } catch (error) {
        console.log(error);
    }
}
