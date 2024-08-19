import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import LiteYoutubeEmbed from 'react-lite-youtube-embed';
import { Link } from 'react-router-dom';

interface YTEvent {
    target: YTPlayer;
}

const Music = () => {
    const myRef = useRef<HTMLIFrameElement | null>(null);
    const playerRef = useRef<YTPlayer | null>(null);
    const [Playing, setPlaying] = useState(true);

    useEffect(() => {
        const button = document.querySelector('.lty-playbtn');

        if (!button || button == null) return;
        const btnElm = button as HTMLButtonElement;

        let options = {
            rootMargin: '-50%',
            threshold: 1,
        };

        let observer = new IntersectionObserver(() => {
            return setTimeout(() => {
                btnElm.click();
            });
        }, options);
        observer.observe(btnElm);

        const onPageLoad = () => {
            const loadYouTubeIframeAPI = () => {
                const tag = document.createElement('script');
                tag.src = 'https://www.youtube.com/iframe_api';
                tag.defer = true;
                tag.async = true;
                const firstScriptTag =
                    document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

                console.log('loadYouTubeIframeAPI');
            };

            if (!window.YT) loadYouTubeIframeAPI();

            window.onYouTubeIframeAPIReady = () => {
                if (!myRef.current) return;
                playerRef.current = new window.YT.Player(myRef.current, {
                    events: {
                        onReady: (event: YTEvent) => {
                            event.target.playVideo();
                        },
                    },
                });
                console.log(playerRef.current);
            };
        };

        if (document.readyState === 'complete') {
            onPageLoad();
            return;
        } else {
            window.addEventListener('load', onPageLoad);
        }

        return () => {
            observer.unobserve(btnElm);
            window.removeEventListener('load', onPageLoad);
        };
    }, []);

    const toggleVideo = () => {
        if (!playerRef.current) return;
        Playing
            ? playerRef.current.pauseVideo()
            : playerRef.current.playVideo();
        setPlaying((v) => !v);
    };

    const nextVid = () => {
        if (!playerRef.current) return;
        playerRef.current.nextVideo();
    };

    const prevVideo = () => {
        if (!playerRef.current) return;
        playerRef.current.previousVideo();
    };

    const shuffle = () => {
        if (!playerRef.current) return;
        playerRef.current.setShuffle(true);
        const arr = playerRef.current.getPlaylist();
        console.log(arr);
    };

    const unFocusIframe = () => {
        const iframe = document.querySelector<HTMLIFrameElement>(
            '.hero__video-player iframe',
        );
        iframe?.setAttribute('tabindex', '-1');
    };

    return (
        <div className='w-2/3 h-full flex flex-col gap-5'>
            {/* <h2 className='mx-auto'>{title}</h2> */}

            <div className='flex justify-center items-center'>
                <Button onClick={prevVideo}>Previous Video</Button>
                <Button onClick={nextVid}>Next Video</Button>
            </div>

            <Button onClick={toggleVideo}>Play Video</Button>
            <Button onClick={shuffle}>Shuffle Playlist</Button>
            <LiteYoutubeEmbed
                id='PL8noWinfnxi2uEgElXejICKtZY0_sAYK5'
                title='Song List'
                ref={myRef}
                noCookie={true}
                onIframeAdded={unFocusIframe}
                params='enablejsapi=1'
                // poster='default'
                playlist={true}
                adNetwork={false}
            />

            <Link to='/'>Go Back </Link>
        </div>
    );
};

export default Music;
