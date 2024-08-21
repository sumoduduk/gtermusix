import { cn } from '@/lib/utils';
import { SavedVideo } from '@/types/interface';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const CardSong = ({
    card,
    index,
    layout = false,
}: {
    card: SavedVideo;
    index: number;
    layout?: boolean;
}) => {
    const handleOpen = () => {
        console.log({ index });
    };

    return (
        <motion.button
            layoutId={layout ? `card-${card.title}` : undefined}
            onClick={handleOpen}
            className='rounded-xl bg-gray-100 dark:bg-neutral-900 overflow-hidden h-64 w-48 flex flex-col items-start justify-start relative z-10'
            key={card.videoId}
        >
            <div className='absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none' />
            <div className='relative z-40 p-1'>
                <motion.p
                    layoutId={layout ? `category-${card.title}` : undefined}
                    className='text-white text-sm md:text-base font-medium font-sans text-left'
                >
                    {card.author}
                </motion.p>
                <motion.p
                    layoutId={layout ? `title-${card.title}` : undefined}
                    className='text-white text-lg font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2'
                >
                    {card.title}
                </motion.p>
            </div>
            <BlurImage
                src={card.videoThumbnails}
                className='object-cover absolute z-10 inset-0'
            />
        </motion.button>
    );
};

type IMGtype = {
    className: string;
    src: string;
};

export const BlurImage = ({ className, src }: IMGtype) => {
    const [isLoading, setLoading] = useState(true);
    return (
        <img
            className={cn(
                'transition duration-300 w-full h-full',
                isLoading ? 'blur-sm' : 'blur-0',
                className,
            )}
            onLoad={() => setLoading(false)}
            src={src}
        />
    );
};
