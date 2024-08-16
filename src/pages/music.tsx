import { music_list } from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';
import LiteYoutubeEmbed from 'react-lite-youtube-embed';
import { Link, useParams } from 'react-router-dom';

const Music = () => {
    const myRef = useRef<HTMLIFrameElement>(null);

    const { musicId } = useParams();

    const play = () => {
        if (myRef) {
            const curr = myRef.current;
            if (!curr) return;

            // curr.play()
        }
    };

    const title = musicId ? music_list[musicId] : '';

    if (!musicId) {
        return (
            <div className='w-2/3 full flex '>
                <h1 className='m-auto text-2xl'>GTermusix</h1>
            </div>
        );
    }

    useEffect(() => {
        const button = document.querySelector('.lty-playbtn');

        if (!button || button == null) return;
        const btnElm = button as HTMLButtonElement;

        function createObserver() {
            let observer;

            let options = {
                rootMargin: '-50%',
                threshold: 1,
            };

            observer = new IntersectionObserver(() => btnElm.click(), options);
            observer.observe(btnElm);
        }
        return createObserver();
    }, []);

    return (
        <div className='w-2/3 h-full flex flex-col gap-5'>
            <h2 className='mx-auto'>{title}</h2>

            <Button onClick={play}> Play</Button>
            <LiteYoutubeEmbed
                id={musicId}
                title={title}
                ref={myRef}
                noCookie={true}
                poster='default'
                adNetwork={false}
            />

            <Link to='/'>Go Back </Link>
        </div>
    );
};

export default Music;
