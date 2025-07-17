'use client';

import Carousel from "@/components/Carousel";

const genres = [
    'adventure',
    'cyberpunk',
    'historical',
    'horror',
    'post-apocalyptic',
    'romance',
    'sci-fi',
    'western'
];
const images = genres.map(genre => require(`@/images/genres/${genre}.webp`).default);

export default function Page() {
  return (
    <div className="relative flex flex-col lg:flex-row w-screen h-screen bg-black text-xl">
        <Carousel images={images} className={'hidden lg:block absolute w-screen h-screen select-none z-1 w-full h-full object-cover brightness-[0.6]'} />
        <div className="text-white flex flex-col lg:flex-row gap-y-4 gap-x-12 w-screen h-screen px-6 py-4 z-10">
            <div className="h-[43%] w-full rounded-xl border-white/80 border-2 flex items-center justify-center lg:hidden">
                <Carousel images={images} className={'select-none w-full h-full object-cover brightness-[0.6]'} />
            </div>

            <div className="h-[43%] lg:h-full w-full lg:w-9/12 rounded-xl border-white/80 border-2 lg:bg-black/60 flex flex-col items-center justify-center">
                <h1>MESSAGE BOX</h1>
                <div className="hidden lg:block text-center mt-4">
                    <p>With typewriting effect</p>
                    <p>As the text starts writing on the screen, we generate an image describing it</p>
                </div>
            </div>

            <div className="h-[14%] lg:h-full w-full lg:w-3/12 flex flex-row lg:flex-col-reverse items-center lg:items-end justify-between lg:justify-end gap-y-10 gap-x-4">
                <div className="w-2/3 lg:w-full h-full lg:h-1/5 flex items-center justify-center rounded-xl border-white/80 border-2 lg:bg-black/60 hover:bg-blue-600/30 cursor-pointer select-none">
                    INVENTORY
                </div>
                <div className="w-[120px] lg:w-[150px] h-[120px] lg:h-[150px] flex items-center justify-center rounded-full border-white/80 border-2 lg:bg-black/60 hover:bg-blue-600/30 cursor-pointer select-none">
                    ENERGY
                </div>
            </div>
        </div>
    </div>
  );
}
