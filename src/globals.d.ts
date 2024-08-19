interface YTPlayer {
    playVideo: () => void;
    pauseVideo: () => void;
    stopVideo: () => void;
    seekTo: (seconds: number, allowSeekAhead?: boolean) => void;
    setShuffle: (shufflePlaylist: boolean) => void;
    setLoop: (loopPlaylist: boolean) => void;
    playVideoAt: (index: number) => void;
    nextVideo: () => void;
    previousVideo: () => void;
    getPlaylist: () => Array<Object>;
}

interface YT {
    Player: new (element: Element, options: any) => YTPlayer;
}

interface Window {
    YT: YT;
    onYouTubeIframeAPIReady?: () => void;
}
