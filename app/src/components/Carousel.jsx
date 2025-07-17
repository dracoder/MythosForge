'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'
import { cn } from '@/lib/utils';

const Carousel = ({ images, className, seconds = 5, animation = true }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // set random index to start the carousel
        setCurrentIndex(Math.floor(Math.random() * images.length));

        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsFading(false);
            }, 300);
        }, seconds * 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Image
            src={images[currentIndex]}
            alt="Carousel image"
            className={cn(className, animation && `transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`)}
        />
    );
};

export default Carousel;
