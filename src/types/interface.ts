export interface SavedVideo {
    videoId: string;
    title: string;
    videoThumbnails: string;
    author: string;
}

export interface VideoThumbnail {
    quality: string;
    url: string;
    width: number;
    height: number;
}

export interface VideoData {
    videoId: string;
    title: string;
    videoThumbnails: VideoThumbnail[];
    author: string;
}

export interface PlaylistInterface {
    title: string;
    updated: number;
    videos: VideoData[];
}
