import React from 'react';
import BannerCard from '../home/BannerCard';

const Banner = () => {
    return (
        <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
            {/* left side */}
            <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
                <div className='md:w-1/2 space-y-8 h-full'>
                    <h2 className='text-5xl font-bold leading-snug text-black'>Buy And Sell Your Books <span className='text-blue-700'>For The Best Prices</span> </h2>
                    <p className='md:w-4/5'>A book is a medium for recording information in the form of writing or images. Books are typically composed of many pages, bound together and protected by a cover. </p>
                    <div>
                        <input type='search' name='search' id='search' placeholder='search a book' className='py-2 px-2 rounded-s-sm outline-none'></input>
                        <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>
                            search
                        </button>
                    </div>
                </div>
                <div>
                    <BannerCard />
                </div>
            </div>
        </div>
    );
};

export default Banner;
